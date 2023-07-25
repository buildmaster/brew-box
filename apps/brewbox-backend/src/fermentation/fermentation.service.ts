import { Injectable } from '@nestjs/common';
import { CreateFermentationInput } from './dto/create-fermentation.input';
import { UpdateFermentationInput } from './dto/update-fermentation.input';
import BeaconScanner from 'node-beacon-scanner';
type FermentationReading = {
  tempC: number;
  tempF: number;
  gravity: number;
};
@Injectable()
export class FermentationService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scanner: any;
  constructor() {
    this.scanner = new BeaconScanner();
    this.scanner.onadvertisement = (ad) => {
      if (ad.iBeacon.uuid === 'A495BB20-C5B1-4B44-B512-1370F02D74DE') {
        const gravity = ad.iBeacon.minor / 1000;
        const tempF = ad.iBeacon.major / 10;
        const tempC = ((tempF - 32) * 5) / 9;
        this.logFermentation({
          tempC,
          tempF,
          gravity,
        } as FermentationReading);
      }
    };
  }

  logFermentation(fermentationReading: FermentationReading) {
    console.log(fermentationReading);
  }

  startFermentation() {
    this.scanner.startScan();
  }
  stopFermentation() {
    this.scanner.stopScan();
  }
  create(createFermentationInput: CreateFermentationInput) {
    return 'This action adds a new fermentation';
  }

  findAll() {
    return `This action returns all fermentation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fermentation`;
  }

  update(id: number, updateFermentationInput: UpdateFermentationInput) {
    return `This action updates a #${id} fermentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} fermentation`;
  }
}
