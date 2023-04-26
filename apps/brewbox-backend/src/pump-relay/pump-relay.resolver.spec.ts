import { Test, TestingModule } from '@nestjs/testing';
import { PumpRelayResolver } from './pump-relay.resolver';
import { PumpRelayService } from './pump-relay.service';

describe('PumpRelayResolver', () => {
  let resolver: PumpRelayResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PumpRelayResolver, PumpRelayService],
    }).compile();

    resolver = module.get<PumpRelayResolver>(PumpRelayResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
