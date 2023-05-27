import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BurnerRelay } from '../../burner-relay/entities/burner-relay.entity';

@Entity()
@ObjectType()
export class Vessel {
  @PrimaryGeneratedColumn()
  @Field(() => Int, {
    description: 'Id of the vessel',
  })
  id: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the Vessel' })
  name: string;

  @Column('decimal', { scale: 2, precision: 5, nullable: true, default: 0 })
  @Field(() => Float, {
    description: 'Last temperature read',
    nullable: true,
    defaultValue: 0,
  })
  lastTemperature?: number;

  @Column({ nullable: true })
  @Field(() => String, {
    description: 'Probe on this vessel',
    nullable: true,
  })
  probe?: string;

  @Field(() => Int, {
    description: 'Burner under the vessel',
    nullable: true,
  })
  @Column('int', { nullable: true })
  burner?: number;
}
