import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TemperatureProbeService } from './temperature-probe.service';
import { TemperatureProbe } from './entities/temperature-probe.entity';
import { CreateTemperatureProbeInput } from './dto/create-temperature-probe.input';
import { UpdateTemperatureProbeInput } from './dto/update-temperature-probe.input';

@Resolver(() => TemperatureProbe)
export class TemperatureProbeResolver {
  constructor(
    private readonly temperatureProbeService: TemperatureProbeService
  ) {}

  @Mutation(() => TemperatureProbe)
  createTemperatureProbe(
    @Args('createTemperatureProbeInput')
    createTemperatureProbeInput: CreateTemperatureProbeInput
  ) {
    return this.temperatureProbeService.create(createTemperatureProbeInput);
  }

  @Query(() => [TemperatureProbe], { name: 'temperatureProbes' })
  findAll() {
    return this.temperatureProbeService.findAll();
  }

  @Query(() => TemperatureProbe, { name: 'temperatureProbe' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.temperatureProbeService.findOne(id);
  }

  @Mutation(() => TemperatureProbe)
  updateTemperatureProbe(
    @Args('updateTemperatureProbeInput')
    updateTemperatureProbeInput: UpdateTemperatureProbeInput
  ) {
    return this.temperatureProbeService.update(
      updateTemperatureProbeInput.id,
      updateTemperatureProbeInput
    );
  }

  @Mutation(() => TemperatureProbe)
  removeTemperatureProbe(@Args('id', { type: () => Int }) id: number) {
    return this.temperatureProbeService.remove(id);
  }
}
