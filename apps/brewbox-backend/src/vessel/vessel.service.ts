import { Injectable } from '@nestjs/common';
import { CreateVesselInput } from './dto/create-vessel.input';
import { UpdateVesselInput } from './dto/update-vessel.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vessel } from './entities/vessel.entity';

@Injectable()
export class VesselService {
  constructor(
    @InjectRepository(Vessel)
    private entityRepository: Repository<Vessel>
  ) {}
  create(createVesselInput: CreateVesselInput) {
    return 'This action adds a new vessel';
  }

  findAll() {
    return this.entityRepository.find();
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
