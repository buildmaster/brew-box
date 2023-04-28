import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { VesselModule } from '../vessel/vessel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessel } from '../vessel/entities/vessel.entity';
import { TemperatureProbe } from '../temperature-probe/entities/temperature-probe.entity';
import { TemperatureProbeModule } from '../temperature-probe/temperature-probe.module';
import { TemperatureReading } from '../temperature-reading/entities/temperature-reading.entity';
import { TemperatureReadingModule } from '../temperature-reading/temperature-reading.module';
import { BurnerRelay } from '../burner-relay/entities/burner-relay.entity';
import { PumpRelay } from '../pump-relay/entities/pump-relay.entity';
import { BurnerRelayModule } from '../burner-relay/burner-relay.module';
import { PumpRelayModule } from '../pump-relay/pump-relay.module';
import { Relay } from '../relay/entities/relay.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.database/db',
      entities: [
        Relay,
        Vessel,
        TemperatureProbe,
        TemperatureReading,
        BurnerRelay,
        PumpRelay,
      ],
      synchronize: true,
      logging: true,
    }),
    VesselModule,
    TemperatureProbeModule,
    TemperatureReadingModule,
    BurnerRelayModule,
    PumpRelayModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
