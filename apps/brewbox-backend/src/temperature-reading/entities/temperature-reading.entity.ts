import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import { TemperatureProbe } from '../../temperature-probe/entities/temperature-probe.entity';

@Entity()
@ObjectType()
export class TemperatureReading {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The Reading Id' })
  id: number;

  @Column('decimal', { scale: 2, precision: 5, nullable: false, default: 0 })
  @Field(() => Float, {
    description: 'Last temperature read',
    nullable: false,
    defaultValue: 0,
  })
  temperature: number;

  @ManyToOne(() => TemperatureProbe, (probe) => probe.readings)
  @Field(() => TemperatureProbe, {
    description: 'The Probe related to this reading',
    nullable: false,
  })
  probe: TemperatureProbe;
}
