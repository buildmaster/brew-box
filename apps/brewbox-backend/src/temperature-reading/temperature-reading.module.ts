import { Module } from '@nestjs/common';
import { TemperatureReadingService } from './temperature-reading.service';
import { TemperatureReadingResolver } from './temperature-reading.resolver';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureReading]), PubSubModule],
  providers: [TemperatureReadingResolver, TemperatureReadingService],
})
export class TemperatureReadingModule {}
