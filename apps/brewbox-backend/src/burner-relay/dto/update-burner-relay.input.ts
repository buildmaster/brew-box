import { CreateBurnerRelayInput } from './create-burner-relay.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBurnerRelayInput extends PartialType(
  CreateBurnerRelayInput
) {
  @Field(() => Int)
  id: number;
}
