import {
  ObjectType,
  Field,
  Float,
  Int,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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

  @Column({ nullable: false })
  @Field(() => String, {
    description: 'The serial number of the Probe related to this reading',
    nullable: false,
  })
  serialNumber: string;
  @CreateDateColumn({})
  @Field(() => GraphQLISODateTime, {
    description: 'date the reading was created',
    nullable: false,
  })
  dateCreated: Date;
}
