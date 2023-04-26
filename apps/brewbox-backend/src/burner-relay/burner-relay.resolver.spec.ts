import { Test, TestingModule } from '@nestjs/testing';
import { BurnerRelayResolver } from './burner-relay.resolver';
import { BurnerRelayService } from './burner-relay.service';

describe('BurnerRelayResolver', () => {
  let resolver: BurnerRelayResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BurnerRelayResolver, BurnerRelayService],
    }).compile();

    resolver = module.get<BurnerRelayResolver>(BurnerRelayResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
