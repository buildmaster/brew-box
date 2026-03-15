import { Inject, Injectable } from '@nestjs/common';
import { CreateTemperatureReadingInput } from './dto/create-temperature-reading.input';
import { UpdateTemperatureReadingInput } from './dto/update-temperature-reading.input';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import isPi from 'detect-rpi';
import sensor from 'ds18b20-raspi-typescript';
import { OnEvent } from '@nestjs/event-emitter';
import { TemperatureProbeService } from '../temperature-probe/temperature-probe.service';
import { PubSub } from 'graphql-subscriptions';
import { SUBSCRIPTION_KEYS } from '../constants';

class TemperatureReadingEvent {
  constructor(
    public serial: string,
    public temp: number,
  ) {}
}

@Injectable()
export class TemperatureReadingService {
  isRunningOnPi: boolean;
  mockTemperatureReadings: object;
  constructor(
    @InjectRepository(TemperatureReading)
    private entityRepository: Repository<TemperatureReading>,
    @Inject('PUB_SUB') private probePubSub: PubSub,
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
    updateTemperatureReadingInput: UpdateTemperatureReadingInput,
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

  private readSensorWithRetry(sn: string, maxAttempts = 3): number | null {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const temp = sensor.readC(sn, 4);
        if (temp !== null && temp !== undefined && !isNaN(temp)) {
          return temp;
        }
        console.warn(`Sensor ${sn} returned invalid value on attempt ${attempt}: ${temp}`);
      } catch (err) {
        console.error(`Sensor ${sn} read error on attempt ${attempt}:`, err);
      }
    }
    return null;
  }

  getAllTemperatureReadings() {
    const hardwareSerialNumbers =
      TemperatureProbeService.getAllHardwareSerialNumbers();
    hardwareSerialNumbers.forEach((sn) => {
      let temp: number;
      if (this.isRunningOnPi) {
        const result = this.readSensorWithRetry(sn);
        if (result === null) {
          console.error(`Sensor ${sn} failed all read attempts, skipping.`);
          return;
        }
        temp = result;
      } else {
        this.mockTemperatureReadings = this.mockTemperatureReadings || {};
        const randomFactor = Math.random() * 2.9;
        const modifier = randomFactor.toFixed(2);
        console.log({ randomFactor, modifier });
        temp =
          (this.mockTemperatureReadings[sn] || 20.2) +
          Number.parseFloat(modifier);
        temp = Number.parseFloat(temp.toFixed(2));
        if (temp > 100) {
          temp = 20.2;
        }
        console.log({ sn, temp });
        this.mockTemperatureReadings[sn] = temp;
      }
      const reading = this.entityRepository.create({
        temperature: temp,
        serialNumber: sn,
      });
      this.entityRepository.insert(reading).then(() => {
        this.probePubSub.publish(
          `${SUBSCRIPTION_KEYS.NEW_TEMPERATURE_READING}:${reading.serialNumber}`,
          {
            newTemperatureReading: reading,
          },
        );
      }).catch((err) => {
        console.error(`Failed to persist temperature reading for ${sn}:`, err);
      });
    });
  }
}
