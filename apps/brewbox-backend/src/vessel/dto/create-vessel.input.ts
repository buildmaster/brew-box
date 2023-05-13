import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVesselInput {
  @Field(() => String, { description: 'Name for the Vessel' })
  name: string;
  @Field(() => String, {
    description: 'Serial for the probe asigned to this vessel',
  })
  probeSerial: string;
  @Field(() => Int, {
    description: 'PinOut for the burner attached to the vessel',
  })
  burnerPin: number;
}
