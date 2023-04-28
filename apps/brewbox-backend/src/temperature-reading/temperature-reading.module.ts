import { Module } from '@nestjs/common';
import { TemperatureReadingService } from './temperature-reading.service';
import { TemperatureReadingResolver } from './temperature-reading.resolver';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureReading])],
  providers: [TemperatureReadingResolver, TemperatureReadingService],
})
export class TemperatureReadingModule {}
