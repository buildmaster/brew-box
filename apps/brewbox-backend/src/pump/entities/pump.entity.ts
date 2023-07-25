import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PumpMode {
  OFF = 'off',
  ON = 'on',
}
registerEnumType(PumpMode, {
  name: 'PumpMode',
});

@Entity()
@ObjectType()
export class Pump {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Pump ID' })
  id: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the Pump' })
  name: string;

  @Field(() => Int, {
    description: 'PinOut for the pump',
    nullable: true,
  })
  @Column('int', { nullable: true })
  pinOut?: number;

  @Column('simple-enum', {
    enum: [PumpMode.ON, PumpMode.OFF],
    default: PumpMode.OFF,
  })
  @Field(() => PumpMode, {
    description: 'Mode for the pump',
    nullable: false,
    defaultValue: PumpMode.OFF,
  })
  pumpMode: PumpMode;

  @Field(() => Boolean, {
    description: 'Status of the pump',
    nullable: false,
    defaultValue: false,
  })
  @Column('boolean', { nullable: false, default: false })
  pumpActive: boolean;
}
