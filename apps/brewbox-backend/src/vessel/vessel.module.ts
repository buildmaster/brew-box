import { Module } from '@nestjs/common';
import { VesselService } from './vessel.service';
import { VesselResolver } from './vessel.resolver';
import { Vessel } from './entities/vessel.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSubModule } from '../pub-sub/pub-sub.module';
@Module({
  imports: [TypeOrmModule.forFeature([Vessel]), PubSubModule],
  providers: [VesselResolver, VesselService],
})
export class VesselModule {}
