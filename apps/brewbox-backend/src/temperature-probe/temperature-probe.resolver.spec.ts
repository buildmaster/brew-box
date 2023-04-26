import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureProbeResolver } from './temperature-probe.resolver';
import { TemperatureProbeService } from './temperature-probe.service';

describe('TemperatureProbeResolver', () => {
  let resolver: TemperatureProbeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureProbeResolver, TemperatureProbeService],
    }).compile();

    resolver = module.get<TemperatureProbeResolver>(TemperatureProbeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
