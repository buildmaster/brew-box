import { Module } from '@nestjs/common';
import { PumpRelayService } from './pump-relay.service';
import { PumpRelayResolver } from './pump-relay.resolver';

@Module({
  providers: [PumpRelayResolver, PumpRelayService],
})
export class PumpRelayModule {}
