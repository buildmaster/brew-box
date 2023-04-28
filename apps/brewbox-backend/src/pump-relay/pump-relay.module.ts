import { Module } from '@nestjs/common';
import { PumpRelayService } from './pump-relay.service';
import { PumpRelayResolver } from './pump-relay.resolver';
import { PumpRelay } from './entities/pump-relay.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PumpRelay])],
  providers: [PumpRelayResolver, PumpRelayService],
})
export class PumpRelayModule {}
