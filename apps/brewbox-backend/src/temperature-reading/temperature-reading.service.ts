import { Injectable } from '@nestjs/common';
import { CreateTemperatureReadingInput } from './dto/create-temperature-reading.input';
import { UpdateTemperatureReadingInput } from './dto/update-temperature-reading.input';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TemperatureReadingService {
  constructor(
    @InjectRepository(TemperatureReading)
    private entityRepository: Repository<TemperatureReading>
  ) {}

  create(createTemperatureReadingInput: CreateTemperatureReadingInput) {
    return 'This action adds a new temperatureReading';
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} temperatureReading`;
  }

  update(
    id: number,
    updateTemperatureReadingInput: UpdateTemperatureReadingInput
  ) {
    return `This action updates a #${id} temperatureReading`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperatureReading`;
  }
}
