import { Inject, Injectable } from '@nestjs/common';
import { CreateTemperatureReadingInput } from './dto/create-temperature-reading.input';
import { UpdateTemperatureReadingInput } from './dto/update-temperature-reading.input';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import isPi from 'detect-rpi';
import sensor from 'ds18b20-raspi-typescript';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { TemperatureProbeService } from '../temperature-probe/temperature-probe.service';
import { PubSub } from 'graphql-subscriptions';

class TemperatureReadingEvent {
  constructor(public serial: string, public temp: number) {}
}

@Injectable()
export class TemperatureReadingService {
  isRunningOnPi: boolean;
  mockTemperatureReadings: object;
  constructor(
    @InjectRepository(TemperatureReading)
    private entityRepository: Repository<TemperatureReading>,
    private eventEmitter: EventEmitter2,
    @Inject('PUB_SUB') private probePubSub: PubSub
  ) {
    this.isRunningOnPi = isPi();
    setInterval(() => {
      this.getAllTemperatureReadings();
    }, 10000);
  }

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

  @OnEvent('NEW_TEMP_READING')
  handleNewTemperatureReading(payload: TemperatureReadingEvent) {
    console.log({ event: payload }, 'new temp event');
  }
  getAllTemperatureReadings() {
    const hardwareSerialNumbers =
      TemperatureProbeService.getAllHardwareSerialNumbers();
    hardwareSerialNumbers.forEach((sn) => {
      let temp;
      if (this.isRunningOnPi) {
        temp = sensor.readC(sn, 4);
      } else {
        this.mockTemperatureReadings = this.mockTemperatureReadings || {};
        temp =
          (this.mockTemperatureReadings[sn] || 20.2) +
          Number.parseFloat((Math.random() % 2).toFixed());
        if (temp > 100) {
          temp = 20.2;
        }
        this.mockTemperatureReadings[sn] = temp;
      }
      const reading = this.entityRepository.create({
        temperature: temp,
        serialNumber: sn,
      });
      this.entityRepository.insert(reading).then(() => {
        this.probePubSub.publish('NEW_TEMPERATURE_READING', {
          newTemperatureReading: reading,
        });
        this.eventEmitter.emitAsync('NEW_TEMPERATURE_READING', {
          newTemperatureReading: reading,
        });
      });
    });
  }
}
