import { ChildEntity, OneToOne } from 'typeorm';
import { Relay } from '../../relay/entities/relay.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Vessel } from '../../vessel/entities/vessel.entity';

@ChildEntity()
@ObjectType()
export class BurnerRelay extends Relay {
  @OneToOne(() => Vessel, (vessel) => vessel.burner, { nullable: true })
  @Field(() => Vessel, {
    description: 'vessel under this probe',
    nullable: true,
  })
  vessel: Vessel;
}
