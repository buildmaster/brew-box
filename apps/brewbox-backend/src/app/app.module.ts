import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { VesselModule } from '../vessel/vessel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessel } from '../vessel/entities/vessel.entity';
import { TemperatureProbeModule } from '../temperature-probe/temperature-probe.module';
import { TemperatureReading } from '../temperature-reading/entities/temperature-reading.entity';
import { TemperatureReadingModule } from '../temperature-reading/temperature-reading.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { FermentationModule } from '../fermentation/fermentation.module';
import { PumpModule } from '../pump/pump.module';
import { Pump } from '../pump/entities/pump.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.database/db',
      entities: [Vessel, TemperatureReading, Pump],
      synchronize: true,
      logging: false,
    }),
    TemperatureProbeModule,
    TemperatureReadingModule,
    VesselModule,
    FermentationModule,
    PumpModule,
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
