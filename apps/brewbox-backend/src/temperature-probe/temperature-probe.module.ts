import { Module } from '@nestjs/common';
import { TemperatureProbeService } from './temperature-probe.service';
import { TemperatureProbeResolver } from './temperature-probe.resolver';

@Module({
  imports: [],
  providers: [TemperatureProbeResolver, TemperatureProbeService],
})
export class TemperatureProbeModule {}
