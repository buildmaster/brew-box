import { ChildEntity, Column } from 'typeorm';
import { Relay } from '../../relay/entities/relay.entity';
import { ObjectType } from '@nestjs/graphql';

@ChildEntity()
@ObjectType()
export class PumpRelay extends Relay {}
