import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Brew {
  @Field(() => Int, { description: 'Brew Id', nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Batch ID in BrewFather' })
  batchId: string;

  @Column()
  @Field(() => String, { description: 'Batch name' })
  name: string;

  @Column()
  @Field(() => String, { description: 'Batch status in Brewfather' })
  status: string;

  @Column()
  @Field(() => Date, { description: 'planned brew date' })
  date: Date;
}
