import { Injectable } from '@nestjs/common';
import { CreateOrUpdateVesselInput } from './dto/create-vessel.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vessel } from './entities/vessel.entity';
import { TemperatureProbeService } from '../temperature-probe/temperature-probe.service';
import { BurnerRelay } from '../burner-relay/entities/burner-relay.entity';

@Injectable()
export class VesselService {
  constructor(
    @InjectRepository(Vessel)
    private vesselRepository: Repository<Vessel>,
    @InjectRepository(BurnerRelay)
    private burnerRepository: Repository<BurnerRelay>
  ) {}
  create(createVesselInput: CreateOrUpdateVesselInput) {
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
      if (createVesselInput.id) {
        return this.vesselRepository
          .update(
            { id: createVesselInput.id },
            {
              name: createVesselInput.name,
              probe: createVesselInput.probe,
              burner: createVesselInput.burner,
            }
          )
          .then((result) => {
            return {
              id: createVesselInput.id,
              name: createVesselInput.name,
              probe: createVesselInput.probe,
              burner: createVesselInput.burner,
            };
          });
      } else {
        return this.vesselRepository.save(
          this.vesselRepository.create({
            name: createVesselInput.name,
            probe: createVesselInput.probe,
            burner: createVesselInput.burner,
          })
        );
      }
    }
  }

  findAll() {
    return this.vesselRepository.find();
  }

  findOne(id: number) {
    return this.vesselRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return this.vesselRepository.delete({ id }).then(() => id);
  }
}
