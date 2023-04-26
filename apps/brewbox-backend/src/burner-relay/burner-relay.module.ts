import { Module } from '@nestjs/common';
import { BurnerRelayService } from './burner-relay.service';
import { BurnerRelayResolver } from './burner-relay.resolver';

@Module({
  providers: [BurnerRelayResolver, BurnerRelayService],
})
export class BurnerRelayModule {}
