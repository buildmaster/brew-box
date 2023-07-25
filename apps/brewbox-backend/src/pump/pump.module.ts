import { Module } from '@nestjs/common';
import { PumpService } from './pump.service';
import { PumpResolver } from './pump.resolver';
import { Pump } from './entities/pump.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pump]), PubSubModule],
  providers: [PumpResolver, PumpService],
})
export class PumpModule {}
