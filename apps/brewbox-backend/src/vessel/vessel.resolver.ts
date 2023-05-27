import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VesselService } from './vessel.service';
import { Vessel } from './entities/vessel.entity';
import { CreateOrUpdateVesselInput } from './dto/create-vessel.input';

@Resolver(() => Vessel)
export class VesselResolver {
  constructor(private readonly vesselService: VesselService) {}

  @Mutation(() => Vessel, { name: 'createOrUpdateVessel' })
  createVessel(
    @Args('createOrUpdateVesselInput')
    createVesselInput: CreateOrUpdateVesselInput
  ) {
    return this.vesselService.create(createVesselInput);
  }

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
  /*
  @Mutation(() => Vessel)
  updateVessel(
    @Args('updateVesselInput') updateVesselInput: UpdateVesselInput
  ) {
    return this.vesselService.update(updateVesselInput.id, updateVesselInput);
  }
*/
}
