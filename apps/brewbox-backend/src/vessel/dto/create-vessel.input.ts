import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrUpdateVesselInput {
  @Field(() => Int, {
    nullable: true,
    description: 'the id of the vessel to update or null if create',
  })
  id?: number;
  @Field(() => String, { description: 'Name for the Vessel' })
  name: string;
  @Field(() => String, {
    description: 'Serial for the probe asigned to this vessel',
    nullable: true,
  })
  probe?: string;
  @Field(() => Int, {
    description: 'PinOut for the burner attached to the vessel',
    nullable: true,
  })
  burner?: number;
}
