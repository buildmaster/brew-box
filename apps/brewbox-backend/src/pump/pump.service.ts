import { Inject, Injectable } from '@nestjs/common';
import { CreateOrUpdatePumpInput } from './dto/create-pump.input';
import { Pump, PumpMode } from './entities/pump.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SUBSCRIPTION_KEYS } from '../constants';
import { init, HIGH, LOW, open, OUTPUT, write } from 'rpio';

@ObjectType()
export class PumpChange {
  @Field(() => Int, {
    description: 'Id of the pump',
  })
  id: number;
  @Field(() => Boolean, {
    description: 'If the pump is active',
  })
  pumpActive: boolean;
  @Field(() => PumpMode, {
    description: 'mode of the pump',
  })
  pumpMode: PumpMode;
}

@Injectable()
export class PumpService {
  constructor(
    @InjectRepository(Pump)
    private pumpRepository: Repository<Pump>,
    @Inject('PUB_SUB') private probePubSub: PubSub,
  ) {}
  async createOrUpdate(createPumpInput: CreateOrUpdatePumpInput) {
    console.log('creating pump');
    let pump: Pump;
    if (createPumpInput.id) {
      pump = await this.pumpRepository
        .update(
          { id: createPumpInput.id },
          {
            name: createPumpInput.name,
            pinOut: createPumpInput.pinOut,
          },
        )
        .then(() => {
          return {
            id: createPumpInput.id,
            name: createPumpInput.name,
            pinOut: createPumpInput.pinOut,
          } as Pump;
        });
    } else {
      pump = await this.pumpRepository.save(
        this.pumpRepository.create({
          name: createPumpInput.name,
          pinOut: createPumpInput.pinOut,
        }),
      );
    }
    return pump;
  }

  findAll() {
    return this.pumpRepository.find();
  }

  findOne(id: number) {
    return this.pumpRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.pumpRepository.delete({ id }).then(() => id);
  }
  setPumpMode(id: number, pumpMode: PumpMode) {
    return this.pumpRepository.findOneBy({ id }).then((pump) => {
      if (pump.pumpMode === pumpMode) {
        return;
      }
      pump.pumpMode = pumpMode;
      if (pumpMode == PumpMode.ON) {
        this.turnOnPump(pump);
      } else {
        this.turnOffPump(pump);
      }
      return this.pumpRepository.save(pump).then(() => pump);
    });
  }
  turnOffPump(pump: Pump) {
    if (pump.pinOut) {
      console.log(`turning off pin ${pump.pinOut}`);
      open(pump.pinOut, OUTPUT);
      write(pump.pinOut, LOW);
    }
    pump.pumpActive = false;
    this.probePubSub.publish(
      `${SUBSCRIPTION_KEYS.PUMP_ACTIVE_CHANGE}:${pump.id}`,
      {
        pumpChange: {
          id: pump.id,
          pumpActive: pump.pumpActive,
          pumpMode: pump.pumpMode,
        } as PumpChange,
      },
    );
  }
  turnOnPump(pump: Pump) {
    if (pump.pinOut) {
      console.log(`turning on pin ${pump.pinOut}`);
      open(pump.pinOut, OUTPUT);
      write(pump.pinOut, HIGH);
    }
    pump.pumpActive = true;
    this.probePubSub.publish(
      `${SUBSCRIPTION_KEYS.PUMP_ACTIVE_CHANGE}:${pump.id}`,
      {
        pumpChange: {
          id: pump.id,
          pumpActive: pump.pumpActive,
          pumpMode: pump.pumpMode,
        } as PumpChange,
      },
    );
  }
}
