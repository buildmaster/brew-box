import { Inject, Injectable } from '@nestjs/common';
import { CreateOrUpdateVesselInput } from './dto/create-vessel.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BurnerMode, Vessel } from './entities/vessel.entity';
import { TemperatureProbeService } from '../temperature-probe/temperature-probe.service';
import { BurnerRelay } from '../burner-relay/entities/burner-relay.entity';
import { PubSub } from 'graphql-subscriptions';
import { SUBSCRIPTION_KEYS } from '../constants';
import { TemperatureReading } from '../temperature-reading/entities/temperature-reading.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BurnerChange {
  @Field(() => Int, {
    description: 'Id of the vessel',
  })
  id: number;
  @Field(() => Boolean, {
    description: 'If the vessel is lit',
  })
  burnerLit: boolean;
  @Field(() => BurnerMode, {
    description: 'Burner mode of the vessel',
  })
  burnerMode: BurnerMode;
}

@Injectable()
export class VesselService {
  activeVesselSubscriptions: number[];
  constructor(
    @InjectRepository(Vessel)
    private vesselRepository: Repository<Vessel>,
    @InjectRepository(BurnerRelay)
    private burnerRepository: Repository<BurnerRelay>,
    @Inject('PUB_SUB') private probePubSub: PubSub,
  ) {
    this.vesselRepository.find().then((existingVessels) => {
      this.activeVesselSubscriptions = [];
      existingVessels.forEach((vessel) => {
        this.subscribeVesselToStatusUpdates(vessel);
      });
    });
  }
  subscribeVesselToStatusUpdates({
    id,
    probe,
  }: {
    id: number;
    probe?: string;
  }) {
    console.log({ key: SUBSCRIPTION_KEYS.NEW_TEMPERATURE_READING });
    this.probePubSub
      .subscribe(
        `${SUBSCRIPTION_KEYS.NEW_TEMPERATURE_READING}:${probe}`,
        async ({
          newTemperatureReading,
        }: {
          newTemperatureReading: TemperatureReading;
        }) => {
          const vessel = await this.vesselRepository.findOneBy({ id });
          let burnerLit = vessel.burnerLit;
          if (vessel.burnerMode === BurnerMode.AUTO) {
            if (
              vessel.setpointTemperature >
                newTemperatureReading.temperature + 2 &&
              !vessel.burnerLit
            ) {
              await this.lightBurner(vessel);
              burnerLit = true;
            } else if (
              vessel.setpointTemperature <
                newTemperatureReading.temperature - 2 &&
              vessel.burnerLit
            ) {
              this.extinguishBurner(vessel);
              burnerLit = false;
            }
          }
          await this.vesselRepository.update(vessel.id, {
            burnerLit: burnerLit,
            lastTemperature: newTemperatureReading.temperature,
          });
        },
      )
      .then((subscriptionId) => {
        this.activeVesselSubscriptions[id] = subscriptionId;
      });
  }
  async lightBurner(vessel: Partial<Vessel>) {
    vessel.burnerLit = true;
    this.probePubSub.publish(
      `${SUBSCRIPTION_KEYS.VESSEL_BURNER_CHANGE}:${vessel.id}`,
      {
        burnerChange: {
          id: vessel.id,
          burnerLit: vessel.burnerLit,
          burnerMode: vessel.burnerMode,
        } as BurnerChange,
      },
    );
  }
  async extinguishBurner(vessel: Partial<Vessel>) {
    vessel.burnerLit = false;
    this.probePubSub.publish(
      `${SUBSCRIPTION_KEYS.VESSEL_BURNER_CHANGE}:${vessel.id}`,
      {
        burnerChange: {
          id: vessel.id,
          burnerLit: vessel.burnerLit,
          burnerMode: vessel.burnerMode,
        } as BurnerChange,
      },
    );
  }
  async create(createVesselInput: CreateOrUpdateVesselInput) {
    // find the probe associated with the serial number
    console.log('getting serial numbers');
    const serialNumbers = TemperatureProbeService.getAllHardwareSerialNumbers();
    if (
      createVesselInput.probe &&
      !serialNumbers.some((sn) => createVesselInput.probe === sn)
    ) {
      console.log('no serial');
      throw new Error('No serial number matching an existing probe');
    } else {
      console.log('creating vessel');
      let vessel: Vessel;
      if (createVesselInput.id) {
        vessel = await this.vesselRepository
          .update(
            { id: createVesselInput.id },
            {
              name: createVesselInput.name,
              probe: createVesselInput.probe,
              burner: createVesselInput.burner,
            },
          )
          .then(() => {
            return {
              id: createVesselInput.id,
              name: createVesselInput.name,
              probe: createVesselInput.probe,
              burner: createVesselInput.burner,
            } as Vessel;
          });
      } else {
        vessel = await this.vesselRepository.save(
          this.vesselRepository.create({
            name: createVesselInput.name,
            probe: createVesselInput.probe,
            burner: createVesselInput.burner,
          }),
        );
      }
      this.subscribeVesselToStatusUpdates(vessel);
      return vessel;
    }
  }

  findAll() {
    return this.vesselRepository.find();
  }

  findOne(id: number) {
    return this.vesselRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.vesselRepository.delete({ id }).then(() => id);
  }

  updateSetpointTemperature(id: number, setpoint: number): Promise<boolean> {
    return this.vesselRepository
      .update(
        {
          id: id,
        },
        { setpointTemperature: setpoint },
      )
      .then((res) => {
        return res.affected == 1;
      });
  }
  async updateBurnerMode(id: number, burnerMode: BurnerMode): Promise<boolean> {
    let burnerLit = false;
    if (burnerMode === BurnerMode.ON) {
      this.lightBurner({ id, burnerMode, burnerLit } as Partial<Vessel>);
      burnerLit = true;
    } else if (burnerMode === BurnerMode.OFF) {
      this.extinguishBurner({ id, burnerMode, burnerLit });
      burnerLit = false;
    } else {
      const vessel = await this.vesselRepository.findOneBy({ id });
      if (vessel.lastTemperature - 2 < vessel.setpointTemperature) {
        this.lightBurner({ id, burnerMode, burnerLit });
        burnerLit = true;
      } else if (vessel.lastTemperature + 2 > vessel.setpointTemperature) {
        this.extinguishBurner({ id, burnerMode, burnerLit });
        burnerLit = false;
      }
    }
    return this.vesselRepository
      .update(
        {
          id: id,
        },
        { burnerMode, burnerLit },
      )
      .then((res) => {
        return res.affected == 1;
      });
  }
}
