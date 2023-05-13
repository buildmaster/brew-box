import { Injectable } from '@nestjs/common';
import isPi from 'detect-rpi';
import sensor from 'ds18b20-raspi-typescript';
let runningOnPi: boolean;
@Injectable()
export class TemperatureProbeService {
  static getAllHardwareSerialNumbers() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires

    if (runningOnPi || (runningOnPi = isPi())) {
      return sensor.list();
    } else {
      return ['mock-serial-1', 'mock-serial-2'];
    }
  }
}
