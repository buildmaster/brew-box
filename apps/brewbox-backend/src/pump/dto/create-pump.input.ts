import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrUpdatePumpInput {
  @Field(() => Int, {
    nullable: true,
    description: 'the id of the pump to update or null if create',
  })
  id?: number;
  @Field(() => String, { description: 'Name for the pump' })
  name: string;
  @Field(() => Int, {
    description: 'PinOut for the pump',
    nullable: true,
  })
  pinOut?: number;
}
