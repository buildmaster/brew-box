import { Injectable } from '@nestjs/common';
import { CreateBurnerRelayInput } from './dto/create-burner-relay.input';
import { UpdateBurnerRelayInput } from './dto/update-burner-relay.input';

@Injectable()
export class BurnerRelayService {
  create(createBurnerRelayInput: CreateBurnerRelayInput) {
    return 'This action adds a new burnerRelay';
  }

  findAll() {
    return `This action returns all burnerRelay`;
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
