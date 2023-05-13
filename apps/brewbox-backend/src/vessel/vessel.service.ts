import { Injectable } from '@nestjs/common';
import { CreateVesselInput } from './dto/create-vessel.input';
import { UpdateVesselInput } from './dto/update-vessel.input';

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
  create(createVesselInput: CreateVesselInput) {
    // find the probe associated with the serial number
    console.log('getting serial numbers');
    const serialNumbers = TemperatureProbeService.getAllHardwareSerialNumbers();
    if (!serialNumbers.some((sn) => createVesselInput.probeSerial === sn)) {
      console.log('no serial');
      throw new Error('No serial number matching an existing probe');
    } else {
      return Promise.all([
        this.burnerRepository.findOneBy({
          pinOut: createVesselInput.burnerPin,
        }),
      ]).then(([burner]) => {
        console.log('creating vessel');
        return this.vesselRepository.save(
          this.vesselRepository.create({
            name: createVesselInput.name,
            probe: createVesselInput.probeSerial,
            burner: burner || {
              pinOut: createVesselInput.burnerPin,
            },
          })
        );
      });
    }
  }

  findAll() {
    return this.vesselRepository.find({
      relations: {
        burner: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} vessel`;
  }

  update(id: number, updateVesselInput: UpdateVesselInput) {
    return `This action updates a #${id} vessel`;
  }

  remove(id: number) {
    return `This action removes a #${id} vessel`;
  }
}
