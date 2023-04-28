import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TemperatureReading } from '../../temperature-reading/entities/temperature-reading.entity';
import { Vessel } from '../../vessel/entities/vessel.entity';

@Entity()
@ObjectType()
export class TemperatureProbe {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The probes generated id' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Serial Number for the Probe' })
  serial: string;

  @OneToMany(() => TemperatureReading, (reading) => reading.probe)
  @Field(() => [TemperatureReading], {
    description: 'Readings from this probe',
    defaultValue: [],
  })
  readings: TemperatureReading[];

  @OneToOne(() => Vessel, (vessel) => vessel.probe, { nullable: true })
  @Field(() => Vessel, {
    description: 'vessel under this probe',
    nullable: true,
  })
  vessel: Vessel;
}
