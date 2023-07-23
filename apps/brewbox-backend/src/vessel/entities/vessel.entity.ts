import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum BurnerMode {
  OFF = 'off',
  ON = 'on',
  AUTO = 'auto',
}
registerEnumType(BurnerMode, {
  name: 'BurnerMode',
});

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

  @Field(() => Float, {
    description:
      'Temperature that the vessel is set to turn on below and off above',
    nullable: false,
    defaultValue: 0,
  })
  @Column('decimal', { scale: 2, precision: 5, nullable: false, default: 0 })
  setpointTemperature: number;

  @Field(() => Boolean, {
    description: 'Status of the buner below the vessel',
    nullable: false,
    defaultValue: false,
  })
  @Column('boolean', { nullable: false, default: false })
  burnerLit: boolean;

  @Column('simple-enum', {
    enum: [BurnerMode.ON, BurnerMode.OFF, BurnerMode.AUTO],
    default: BurnerMode.OFF,
  })
  @Field(() => BurnerMode, {
    description: 'Mode for the burner under the vessel',
    nullable: false,
    defaultValue: BurnerMode.OFF,
  })
  burnerMode: BurnerMode;
}
