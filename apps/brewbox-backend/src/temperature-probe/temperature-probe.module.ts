import { Module } from '@nestjs/common';
import { TemperatureProbeService } from './temperature-probe.service';
import { TemperatureProbeResolver } from './temperature-probe.resolver';
import { TemperatureProbe } from './entities/temperature-probe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureProbe])],
  providers: [TemperatureProbeResolver, TemperatureProbeService],
})
export class TemperatureProbeModule {}
