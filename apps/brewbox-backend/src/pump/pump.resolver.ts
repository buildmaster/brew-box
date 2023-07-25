import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { PumpChange, PumpService } from './pump.service';
import { Pump, PumpMode } from './entities/pump.entity';
import { CreateOrUpdatePumpInput } from './dto/create-pump.input';
import { SUBSCRIPTION_KEYS } from '../constants';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Pump)
export class PumpResolver {
  constructor(
    private readonly pumpService: PumpService,
    @Inject('PUB_SUB') private probePubSub: PubSub,
  ) {}

  @Mutation(() => Pump, { name: 'createOrUpdatePump' })
  createVessel(
    @Args('createOrUpdatePumpInput')
    createVesselInput: CreateOrUpdatePumpInput,
  ) {
    return this.pumpService.createOrUpdate(createVesselInput);
  }

  @Query(() => [Pump], { name: 'pumps' })
  findAll() {
    return this.pumpService.findAll();
  }

  @Query(() => Pump, { name: 'pump' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pumpService.findOne(id);
  }

  @Mutation(() => Int)
  removePump(@Args('id', { type: () => Int }) id: number) {
    return this.pumpService.remove(id);
  }

  @Mutation(() => Pump, { nullable: true })
  updatePumpMode(
    @Args('id', { type: () => Int }) id: number,
    @Args('pumpMode', { type: () => PumpMode }) pumpMode: PumpMode,
  ) {
    return this.pumpService.setPumpMode(id, pumpMode);
  }

  @Subscription(() => PumpChange, {
    name: 'pumpChange',
  })
  subscribeToPumpActiveChange(@Args('id', { type: () => Int }) id: number) {
    return this.probePubSub.asyncIterator(
      `${SUBSCRIPTION_KEYS.PUMP_ACTIVE_CHANGE}:${id}`,
    );
  }
}
