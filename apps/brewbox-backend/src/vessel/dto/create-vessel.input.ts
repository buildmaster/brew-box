import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVesselInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
