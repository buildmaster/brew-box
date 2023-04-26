import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TemperatureReading {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
