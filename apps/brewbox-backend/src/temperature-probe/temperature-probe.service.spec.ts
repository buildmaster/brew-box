import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureProbeService } from './temperature-probe.service';

describe('TemperatureProbeService', () => {
  let service: TemperatureProbeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureProbeService],
    }).compile();

    service = module.get<TemperatureProbeService>(TemperatureProbeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
