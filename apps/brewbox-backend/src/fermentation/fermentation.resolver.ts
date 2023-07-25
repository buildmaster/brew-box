import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FermentationService } from './fermentation.service';
import { Fermentation } from './entities/fermentation.entity';
import { CreateFermentationInput } from './dto/create-fermentation.input';
import { UpdateFermentationInput } from './dto/update-fermentation.input';

@Resolver(() => Fermentation)
export class FermentationResolver {
  constructor(private readonly fermentationService: FermentationService) {}

  @Mutation(() => Fermentation)
  createFermentation(@Args('createFermentationInput') createFermentationInput: CreateFermentationInput) {
    return this.fermentationService.create(createFermentationInput);
  }

  @Query(() => [Fermentation], { name: 'fermentation' })
  findAll() {
    return this.fermentationService.findAll();
  }

  @Query(() => Fermentation, { name: 'fermentation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fermentationService.findOne(id);
  }

  @Mutation(() => Fermentation)
  updateFermentation(@Args('updateFermentationInput') updateFermentationInput: UpdateFermentationInput) {
    return this.fermentationService.update(updateFermentationInput.id, updateFermentationInput);
  }

  @Mutation(() => Fermentation)
  removeFermentation(@Args('id', { type: () => Int }) id: number) {
    return this.fermentationService.remove(id);
  }
}
