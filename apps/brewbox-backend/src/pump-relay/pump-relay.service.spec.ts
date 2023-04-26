import { Test, TestingModule } from '@nestjs/testing';
import { PumpRelayService } from './pump-relay.service';

describe('PumpRelayService', () => {
  let service: PumpRelayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PumpRelayService],
    }).compile();

    service = module.get<PumpRelayService>(PumpRelayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
