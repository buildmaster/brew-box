import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PumpRelayService } from './pump-relay.service';
import { PumpRelay } from './entities/pump-relay.entity';
import { CreatePumpRelayInput } from './dto/create-pump-relay.input';
import { UpdatePumpRelayInput } from './dto/update-pump-relay.input';

@Resolver(() => PumpRelay)
export class PumpRelayResolver {
  constructor(private readonly pumpRelayService: PumpRelayService) {}

  @Mutation(() => PumpRelay)
  createPumpRelay(
    @Args('createPumpRelayInput') createPumpRelayInput: CreatePumpRelayInput
  ) {
    return this.pumpRelayService.create(createPumpRelayInput);
  }

  @Query(() => [PumpRelay], { name: 'pumpRelays' })
  findAll() {
    return this.pumpRelayService.findAll();
  }

  @Query(() => PumpRelay, { name: 'pumpRelay' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pumpRelayService.findOne(id);
  }

  @Mutation(() => PumpRelay)
  updatePumpRelay(
    @Args('updatePumpRelayInput') updatePumpRelayInput: UpdatePumpRelayInput
  ) {
    return this.pumpRelayService.update(
      updatePumpRelayInput.id,
      updatePumpRelayInput
    );
  }

  @Mutation(() => PumpRelay)
  removePumpRelay(@Args('id', { type: () => Int }) id: number) {
    return this.pumpRelayService.remove(id);
  }
}
