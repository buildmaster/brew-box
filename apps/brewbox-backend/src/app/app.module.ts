import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { VesselModule } from '../vessel/vessel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessel } from '../vessel/entities/vessel.entity';
import { TemperatureProbeModule } from '../temperature-probe/temperature-probe.module';
import { TemperatureReading } from '../temperature-reading/entities/temperature-reading.entity';
import { TemperatureReadingModule } from '../temperature-reading/temperature-reading.module';
import { BurnerRelay } from '../burner-relay/entities/burner-relay.entity';
import { PumpRelay } from '../pump-relay/entities/pump-relay.entity';
import { BurnerRelayModule } from '../burner-relay/burner-relay.module';
import { PumpRelayModule } from '../pump-relay/pump-relay.module';
import { Relay } from '../relay/entities/relay.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PubSub } from 'graphql-subscriptions';
import { Context } from 'graphql-ws';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.database/db',
      entities: [Relay, Vessel, TemperatureReading, BurnerRelay, PumpRelay],
      synchronize: true,
      logging: false,
    }),
    VesselModule,
    TemperatureProbeModule,
    TemperatureReadingModule,
    BurnerRelayModule,
    PumpRelayModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {
          onConnect: (context: Context<any>) => {
            console.log({ context }, 'ws connected');
          },
        },
      },
      autoSchemaFile: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
