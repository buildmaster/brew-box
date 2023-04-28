import { Module } from '@nestjs/common';
import { BurnerRelayService } from './burner-relay.service';
import { BurnerRelayResolver } from './burner-relay.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurnerRelay } from './entities/burner-relay.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BurnerRelay])],
  providers: [BurnerRelayResolver, BurnerRelayService],
})
export class BurnerRelayModule {}
