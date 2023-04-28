import { Injectable } from '@nestjs/common';
import { CreatePumpRelayInput } from './dto/create-pump-relay.input';
import { UpdatePumpRelayInput } from './dto/update-pump-relay.input';
import { PumpRelay } from './entities/pump-relay.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PumpRelayService {
  constructor(
    @InjectRepository(PumpRelay)
    private entityRepository: Repository<PumpRelay>
  ) {}
  create(createPumpRelayInput: CreatePumpRelayInput) {
    return 'This action adds a new pumpRelay';
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pumpRelay`;
  }

  update(id: number, updatePumpRelayInput: UpdatePumpRelayInput) {
    return `This action updates a #${id} pumpRelay`;
  }

  remove(id: number) {
    return `This action removes a #${id} pumpRelay`;
  }
}
