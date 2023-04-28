import { Injectable } from '@nestjs/common';
import { CreateBurnerRelayInput } from './dto/create-burner-relay.input';
import { UpdateBurnerRelayInput } from './dto/update-burner-relay.input';
import { BurnerRelay } from './entities/burner-relay.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BurnerRelayService {
  constructor(
    @InjectRepository(BurnerRelay)
    private entityRepository: Repository<BurnerRelay>
  ) {}
  create(createBurnerRelayInput: CreateBurnerRelayInput) {
    return 'This action adds a new burnerRelay';
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} burnerRelay`;
  }

  update(id: number, updateBurnerRelayInput: UpdateBurnerRelayInput) {
    return `This action updates a #${id} burnerRelay`;
  }

  remove(id: number) {
    return `This action removes a #${id} burnerRelay`;
  }
}
