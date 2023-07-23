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
import { Context } from 'graphql-ws';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.database/db',
      entities: [Relay, Vessel, TemperatureReading, BurnerRelay, PumpRelay],
      synchronize: true,
      logging: false,
    }),
    TemperatureProbeModule,
    TemperatureReadingModule,
    VesselModule,
    BurnerRelayModule,
    PumpRelayModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': {},
      },
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
