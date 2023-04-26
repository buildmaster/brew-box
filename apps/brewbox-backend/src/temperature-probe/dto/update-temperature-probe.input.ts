import { CreateTemperatureProbeInput } from './create-temperature-probe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTemperatureProbeInput extends PartialType(
  CreateTemperatureProbeInput
) {
  @Field(() => Int)
  id: number;
}
