import { Module } from '@nestjs/common';
import { TemperatureReadingService } from './temperature-reading.service';
import { TemperatureReadingResolver } from './temperature-reading.resolver';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureReading])],
  providers: [
    TemperatureReadingResolver,
    TemperatureReadingService,
    {
      provide: 'PROBE_PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class TemperatureReadingModule {}
