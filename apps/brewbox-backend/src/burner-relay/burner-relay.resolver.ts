import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BurnerRelayService } from './burner-relay.service';
import { BurnerRelay } from './entities/burner-relay.entity';
import { CreateBurnerRelayInput } from './dto/create-burner-relay.input';
import { UpdateBurnerRelayInput } from './dto/update-burner-relay.input';

@Resolver(() => BurnerRelay)
export class BurnerRelayResolver {
  constructor(private readonly burnerRelayService: BurnerRelayService) {}

  @Mutation(() => BurnerRelay)
  createBurnerRelay(
    @Args('createBurnerRelayInput')
    createBurnerRelayInput: CreateBurnerRelayInput
  ) {
    return this.burnerRelayService.create(createBurnerRelayInput);
  }

  @Query(() => [BurnerRelay], { name: 'burnerRelays' })
  findAll() {
    return this.burnerRelayService.findAll();
  }

  @Query(() => BurnerRelay, { name: 'burnerRelay' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.burnerRelayService.findOne(id);
  }

  @Mutation(() => BurnerRelay)
  updateBurnerRelay(
    @Args('updateBurnerRelayInput')
    updateBurnerRelayInput: UpdateBurnerRelayInput
  ) {
    return this.burnerRelayService.update(
      updateBurnerRelayInput.id,
      updateBurnerRelayInput
    );
  }

  @Mutation(() => BurnerRelay)
  removeBurnerRelay(@Args('id', { type: () => Int }) id: number) {
    return this.burnerRelayService.remove(id);
  }
}
