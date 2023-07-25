import { CreateBrewInput } from './create-brew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBrewInput extends PartialType(CreateBrewInput) {
  @Field(() => Int)
  id: number;
}
