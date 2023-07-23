import { Module } from '@nestjs/common';
import { VesselService } from './vessel.service';
import { VesselResolver } from './vessel.resolver';
import { Vessel } from './entities/vessel.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BurnerRelay } from '../burner-relay/entities/burner-relay.entity';
import { PubSubModule } from '../pub-sub/pub-sub.module';
@Module({
  imports: [TypeOrmModule.forFeature([Vessel, BurnerRelay]), PubSubModule],
  providers: [VesselResolver, VesselService],
})
export class VesselModule {}
