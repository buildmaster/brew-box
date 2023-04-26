import { Injectable } from '@nestjs/common';
import { CreatePumpRelayInput } from './dto/create-pump-relay.input';
import { UpdatePumpRelayInput } from './dto/update-pump-relay.input';

@Injectable()
export class PumpRelayService {
  create(createPumpRelayInput: CreatePumpRelayInput) {
    return 'This action adds a new pumpRelay';
  }

  findAll() {
    return `This action returns all pumpRelay`;
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
