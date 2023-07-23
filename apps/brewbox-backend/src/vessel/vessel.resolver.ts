import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { VesselService } from './vessel.service';
import { BurnerMode, Vessel } from './entities/vessel.entity';
import { CreateOrUpdateVesselInput } from './dto/create-vessel.input';
import { SUBSCRIPTION_KEYS } from '../constants';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';
import { BurnerChange } from './vessel.service';
@Resolver(() => Vessel)
export class VesselResolver {
  constructor(
    private readonly vesselService: VesselService,
    @Inject('PUB_SUB') private probePubSub: PubSub,
  ) {}

  @Query(() => [Vessel], { name: 'vessels' })
  findAll() {
    return this.vesselService.findAll();
  }

  @Query(() => Vessel, { name: 'vessel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vesselService.findOne(id);
  }
  @Mutation(() => Int)
  removeVessel(@Args('id', { type: () => Int }) id: number) {
    return this.vesselService.remove(id);
  }
  @Mutation(() => Vessel, { name: 'createOrUpdateVessel' })
  createVessel(
    @Args('createOrUpdateVesselInput')
    createVesselInput: CreateOrUpdateVesselInput,
  ) {
    return this.vesselService.create(createVesselInput);
  }
  @Mutation(() => Boolean, { name: 'updateSetpointTemperature' })
  updateSetpointTemperature(
    @Args('id', { type: () => Int })
    id: number,
    @Args('setpoint')
    setpoint: number,
  ) {
    return this.vesselService.updateSetpointTemperature(id, setpoint);
  }
  @Mutation(() => Boolean, { name: 'updateBurnerMode' })
  updateBurnerMode(
    @Args('id', { type: () => Int })
    id: number,
    @Args('burnerMode', { type: () => BurnerMode })
    burnerMode: BurnerMode,
  ) {
    return this.vesselService.updateBurnerMode(id, burnerMode);
  }
  @Subscription(() => BurnerChange, {
    name: 'burnerChange',
  })
  subscribeToBurnerChange(@Args('id', { type: () => Int }) id: number) {
    return this.probePubSub.asyncIterator(
      `${SUBSCRIPTION_KEYS.VESSEL_BURNER_CHANGE}:${id}`,
    );
  }
  /*
  @Mutation(() => Vessel)
  updateVessel(
    @Args('updateVesselInput') updateVesselInput: UpdateVesselInput
  ) {
    return this.vesselService.update(updateVesselInput.id, updateVesselInput);
  }
*/
}
