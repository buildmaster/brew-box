import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureReadingService } from './temperature-reading.service';

describe('TemperatureReadingService', () => {
  let service: TemperatureReadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureReadingService],
    }).compile();

    service = module.get<TemperatureReadingService>(TemperatureReadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
