import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VesselService } from './vessel.service';
import { Vessel } from './entities/vessel.entity';
import { CreateVesselInput } from './dto/create-vessel.input';
import { UpdateVesselInput } from './dto/update-vessel.input';

@Resolver(() => Vessel)
export class VesselResolver {
  constructor(private readonly vesselService: VesselService) {}

  @Mutation(() => Vessel)
  createVessel(
    @Args('createVesselInput') createVesselInput: CreateVesselInput
  ) {
    return this.vesselService.create(createVesselInput);
  }

  @Query(() => [Vessel], { name: 'vessels' })
  findAll() {
    return this.vesselService.findAll();
  }
  /*
  @Query(() => Vessel, { name: 'vessel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vesselService.findOne(id);
  }

  @Mutation(() => Vessel)
  updateVessel(
    @Args('updateVesselInput') updateVesselInput: UpdateVesselInput
  ) {
    return this.vesselService.update(updateVesselInput.id, updateVesselInput);
  }

  @Mutation(() => Vessel)
  removeVessel(@Args('id', { type: () => Int }) id: number) {
    return this.vesselService.remove(id);
  }
  */
}
