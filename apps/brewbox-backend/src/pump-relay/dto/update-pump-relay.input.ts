import { CreatePumpRelayInput } from './create-pump-relay.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePumpRelayInput extends PartialType(CreatePumpRelayInput) {
  @Field(() => Int)
  id: number;
}
