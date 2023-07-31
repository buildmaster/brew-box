import { Inject, Injectable } from '@nestjs/common';
import { Field, Float, ObjectType } from '@nestjs/graphql';
import BeaconScanner from 'node-beacon-scanner';
import isPi from 'detect-rpi';
import { SUBSCRIPTION_KEYS } from '../constants';
import { PubSub } from 'graphql-subscriptions';

@ObjectType()
export class FermentationReading {
  @Field(() => Float, {
    description: 'The temperature in degrees C',
  })
  tempC: number;
  @Field(() => Float, {
    description: 'The temperature in degrees F',
  })
  tempF: number;
  @Field(() => Float, {
    description: 'The specific gravity',
  })
  gravity: number;
}

enum TempUnit {
  Celcius = 'C',
  Farenheigh = 'F',
  Kelvin = 'K',
}
enum GravityUnit {
  SpecificGravity = 'G',
  Plato = 'P',
}

type BrewFatherStreamReading = {
  name: string; // Required field, this will be the ID in Brewfather
  temp?: number;
  temp_unit?: TempUnit; // C, F, K
  gravity?: number;
  gravity_unit?: GravityUnit;
  comment?: string;
  beer?: string;
};

@Injectable()
export class FermentationService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scanner: any;
  currentReading: FermentationReading;
  timeout: NodeJS.Timeout;
  newReading: FermentationReading;
  isRunningOnPi: boolean;
  deviceName: string;

  constructor(@Inject('PUB_SUB') private subscriptionPubSub: PubSub) {
    this.isRunningOnPi = isPi();
    this.deviceName = 'BigOBrewBox';
    if (!this.isRunningOnPi) {
      this.deviceName = 'TESTBigOBrewBox';
      setInterval(
        () => {
          this.processBeconAdvert({
            iBeacon: {
              uuid: 'A495BB20-C5B1-4B44-B512-1370F02D74DE',
              major: ((Math.random() * 20 * 9) / 5 + 32) * 10,
              minor: (Math.random() / 100 + 1) * 10000,
            },
          });
        },
        Math.floor(Math.random() * 10000) + 10000,
      );
    } else {
      this.scanner = new BeaconScanner();
      this.scanner.onadvertisement = (ad) => {
        this.processBeconAdvert(ad);
      };
      this.scanner.startScan();
    }
    this.logReading();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  processBeconAdvert(ad: any) {
    console.log({ ad }, 'GOT BEACON ADVERT');
    if (ad.iBeacon.uuid === 'A495BB20-C5B1-4B44-B512-1370F02D74DE') {
      const gravity = ad.iBeacon.minor / 10000;
      const tempF = ad.iBeacon.major / 10;
      const tempC = ((tempF - 32) * 5) / 9;
      this.logFermentation({
        tempC,
        tempF,
        gravity,
      } as FermentationReading);
    }
  }

  logReading(): Promise<void> {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    return Promise.resolve().then(() => {
      console.log({ ob: this });
      if (this.newReading) {
        const localLogReading = this.newReading;
        const brewFatherStreamReading = {
          name: this.deviceName,
          temp: localLogReading.tempC,
          temp_unit: TempUnit.Celcius,
          gravity: localLogReading.gravity,
          gravity_unit: GravityUnit.SpecificGravity,
        } as BrewFatherStreamReading;

        return fetch('http://log.brewfather.net/stream?id=KxrJcjbv7exQcZ', {
          method: 'POST',
          body: JSON.stringify(brewFatherStreamReading),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(() => {
            delete this.newReading;
            this.timeout = setTimeout(() => {
              this.logReading();
            }, 900000);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.timeout = setTimeout(() => {
          this.logReading();
        }, 10000);
      }
    });
  }

  logFermentation(fermentationReading: FermentationReading) {
    console.log({ fermentationReading });
    this.currentReading = fermentationReading;
    this.newReading = fermentationReading;
    this.subscriptionPubSub.publish(
      `${SUBSCRIPTION_KEYS.NEW_FERMENT_READING}`,
      {
        fermentationReading: fermentationReading,
      },
    );
  }

  startFermentation() {
    this.scanner.startScan();
  }
  stopFermentation() {
    this.scanner.stopScan();
  }
  getCurrentReading() {
    return this.currentReading;
  }
}
