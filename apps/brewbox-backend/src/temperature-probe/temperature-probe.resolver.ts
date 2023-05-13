import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TemperatureProbeService } from './temperature-probe.service';

@Resolver(() => String)
export class TemperatureProbeResolver {
  constructor(
    private readonly temperatureProbeService: TemperatureProbeService
  ) {}

  @Query(() => [String], { name: 'hardwareSerialNumbers' })
  getAllHardwareSerialNumbers() {
    return TemperatureProbeService.getAllHardwareSerialNumbers();
  }
}
