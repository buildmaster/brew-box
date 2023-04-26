import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureReadingResolver } from './temperature-reading.resolver';
import { TemperatureReadingService } from './temperature-reading.service';

describe('TemperatureReadingResolver', () => {
  let resolver: TemperatureReadingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureReadingResolver, TemperatureReadingService],
    }).compile();

    resolver = module.get<TemperatureReadingResolver>(
      TemperatureReadingResolver
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
