import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Vessel {
  @PrimaryGeneratedColumn()
  @Field(() => Int, {
    description: 'Id of the vessel',
  })
  id: number;

  @Column()
  @Field(() => String, { description: 'Name of the Vessel' })
  name: string;

  @Column('decimal', { scale: 2, precision: 5, nullable: true, default: 0 })
  @Field(() => Float, {
    description: 'Last temperature read',
    nullable: true,
    defaultValue: 0,
  })
  lastTemperature?: number;
}
