import { Test, TestingModule } from '@nestjs/testing';
import { BurnerRelayService } from './burner-relay.service';

describe('BurnerRelayService', () => {
  let service: BurnerRelayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BurnerRelayService],
    }).compile();

    service = module.get<BurnerRelayService>(BurnerRelayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
