import { Module } from '@nestjs/common';
import { TemperatureReadingService } from './temperature-reading.service';
import { TemperatureReadingResolver } from './temperature-reading.resolver';

@Module({
  providers: [TemperatureReadingResolver, TemperatureReadingService],
})
export class TemperatureReadingModule {}
