import { Injectable } from '@nestjs/common';
import { CreateTemperatureReadingInput } from './dto/create-temperature-reading.input';
import { UpdateTemperatureReadingInput } from './dto/update-temperature-reading.input';

@Injectable()
export class TemperatureReadingService {
  create(createTemperatureReadingInput: CreateTemperatureReadingInput) {
    return 'This action adds a new temperatureReading';
  }

  findAll() {
    return `This action returns all temperatureReading`;
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
