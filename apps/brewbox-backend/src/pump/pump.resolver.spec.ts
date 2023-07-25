import { Test, TestingModule } from '@nestjs/testing';
import { PumpResolver } from './pump.resolver';
import { PumpService } from './pump.service';

describe('PumpResolver', () => {
  let resolver: PumpResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PumpResolver, PumpService],
    }).compile();

    resolver = module.get<PumpResolver>(PumpResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
