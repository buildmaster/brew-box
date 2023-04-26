import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BurnerRelay {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
