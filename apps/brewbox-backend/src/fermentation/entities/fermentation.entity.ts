import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fermentation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
