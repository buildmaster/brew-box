import { CreateTemperatureReadingInput } from './create-temperature-reading.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTemperatureReadingInput extends PartialType(
  CreateTemperatureReadingInput
) {
  @Field(() => Int)
  id: number;
}
