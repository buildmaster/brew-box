import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrewService } from './brew.service';
import { Brew } from './entities/brew.entity';
import { CreateBrewInput } from './dto/create-brew.input';
import { UpdateBrewInput } from './dto/update-brew.input';

@Resolver(() => Brew)
export class BrewResolver {
  constructor(private readonly brewService: BrewService) {}

  @Mutation(() => Brew)
  createBrew(@Args('createBrewInput') createBrewInput: CreateBrewInput) {
    return this.brewService.create(createBrewInput);
  }

  @Query(() => [Brew], { name: 'brew' })
  findAll() {
    return this.brewService.findAll();
  }

  @Query(() => Brew, { name: 'brew' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.brewService.findOne(id);
  }

  @Mutation(() => Brew)
  updateBrew(@Args('updateBrewInput') updateBrewInput: UpdateBrewInput) {
    return this.brewService.update(updateBrewInput.id, updateBrewInput);
  }

  @Mutation(() => Brew)
  removeBrew(@Args('id', { type: () => Int }) id: number) {
    return this.brewService.remove(id);
  }
}
