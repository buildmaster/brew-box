import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFermentationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
