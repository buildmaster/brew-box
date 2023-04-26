import { Injectable } from '@nestjs/common';
import { CreateTemperatureProbeInput } from './dto/create-temperature-probe.input';
import { UpdateTemperatureProbeInput } from './dto/update-temperature-probe.input';

@Injectable()
export class TemperatureProbeService {
  create(createTemperatureProbeInput: CreateTemperatureProbeInput) {
    return 'This action adds a new temperatureProbe';
  }

  findAll() {
    return `This action returns all temperatureProbe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temperatureProbe`;
  }

  update(id: number, updateTemperatureProbeInput: UpdateTemperatureProbeInput) {
    return `This action updates a #${id} temperatureProbe`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperatureProbe`;
  }
}
