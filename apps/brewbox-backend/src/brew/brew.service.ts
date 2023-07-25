import { Injectable } from '@nestjs/common';
import { CreateBrewInput } from './dto/create-brew.input';
import { UpdateBrewInput } from './dto/update-brew.input';

@Injectable()
export class BrewService {
  create(createBrewInput: CreateBrewInput) {
    return 'This action adds a new brew';
  }

  findAll() {
    return `This action returns all brew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brew`;
  }

  update(id: number, updateBrewInput: UpdateBrewInput) {
    return `This action updates a #${id} brew`;
  }

  remove(id: number) {
    return `This action removes a #${id} brew`;
  }
}
