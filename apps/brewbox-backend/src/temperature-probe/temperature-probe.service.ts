import { Injectable } from '@nestjs/common';
import { CreateTemperatureProbeInput } from './dto/create-temperature-probe.input';
import { UpdateTemperatureProbeInput } from './dto/update-temperature-probe.input';
import { TemperatureProbe } from './entities/temperature-probe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemperatureProbeService {
  constructor(
    @InjectRepository(TemperatureProbe)
    private entityRepository: Repository<TemperatureProbe>
  ) {}
  create(createTemperatureProbeInput: CreateTemperatureProbeInput) {
    return 'This action adds a new temperatureProbe';
  }

  findAll() {
    return this.entityRepository.find();
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
