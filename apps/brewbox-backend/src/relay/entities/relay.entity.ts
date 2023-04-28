import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
@ObjectType()
export class Relay {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The relay id' })
  id: number;

  @Column('int')
  @Field(() => Int, { description: 'The Pin related to this relay' })
  pinOut: number;
}
