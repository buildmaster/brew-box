import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { BurnerRelay } from '../../burner-relay/entities/burner-relay.entity';
import { TemperatureProbe } from '../../temperature-probe/entities/temperature-probe.entity';

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

  @OneToOne(() => TemperatureProbe, (relay) => relay.vessel, { nullable: true })
  @Field(() => TemperatureProbe, {
    description: 'Probe on this vessel',
    nullable: true,
  })
  probe: TemperatureProbe;

  @OneToOne(() => BurnerRelay, (relay) => relay.vessel, { nullable: true })
  @Field(() => BurnerRelay, {
    description: 'Burner under the vessel',
    nullable: true,
  })
  burner: BurnerRelay;
}
