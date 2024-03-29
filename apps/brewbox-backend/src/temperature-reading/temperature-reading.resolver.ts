import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { TemperatureReadingService } from './temperature-reading.service';
import { TemperatureReading } from './entities/temperature-reading.entity';
import { CreateTemperatureReadingInput } from './dto/create-temperature-reading.input';
import { UpdateTemperatureReadingInput } from './dto/update-temperature-reading.input';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { SUBSCRIPTION_KEYS } from '../constants';

@Resolver(() => TemperatureReading)
export class TemperatureReadingResolver {
  constructor(
    private readonly temperatureReadingService: TemperatureReadingService,
    @Inject('PUB_SUB') private probePubSub: PubSub
  ) {}

  @Mutation(() => TemperatureReading)
  createTemperatureReading(
    @Args('createTemperatureReadingInput')
    createTemperatureReadingInput: CreateTemperatureReadingInput
  ) {
    return this.temperatureReadingService.create(createTemperatureReadingInput);
  }

  @Query(() => [TemperatureReading], { name: 'temperatureReadings' })
  findAll() {
    return this.temperatureReadingService.findAll();
  }

  @Query(() => TemperatureReading, { name: 'temperatureReading' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.temperatureReadingService.findOne(id);
  }

  @Mutation(() => TemperatureReading)
  updateTemperatureReading(
    @Args('updateTemperatureReadingInput')
    updateTemperatureReadingInput: UpdateTemperatureReadingInput
  ) {
    return this.temperatureReadingService.update(
      updateTemperatureReadingInput.id,
      updateTemperatureReadingInput
    );
  }

  @Mutation(() => TemperatureReading)
  removeTemperatureReading(@Args('id', { type: () => Int }) id: number) {
    return this.temperatureReadingService.remove(id);
  }

  @Subscription(() => TemperatureReading, {
    name: 'newTemperatureReading',
  })
  subscribeToNewTemperatureReading(
    @Args('serialNumber', { type: () => String }) serialNumber: string
  ) {
    return this.probePubSub.asyncIterator(
      `${SUBSCRIPTION_KEYS.NEW_TEMPERATURE_READING}:${serialNumber}`
    );
  }
}
