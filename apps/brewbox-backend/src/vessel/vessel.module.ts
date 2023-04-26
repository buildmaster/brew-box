import { Module } from '@nestjs/common';
import { VesselService } from './vessel.service';
import { VesselResolver } from './vessel.resolver';
import { Vessel } from './entities/vessel.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Vessel])],
  providers: [VesselResolver, VesselService],
})
export class VesselModule {}
