import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PumpRelay {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
