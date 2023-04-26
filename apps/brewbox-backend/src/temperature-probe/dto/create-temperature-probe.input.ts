import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTemperatureProbeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
