import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Brew {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
