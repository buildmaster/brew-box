import { Test, TestingModule } from '@nestjs/testing';
import { FermentationService } from './fermentation.service';

describe('FermentationService', () => {
  let service: FermentationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FermentationService],
    }).compile();

    service = module.get<FermentationService>(FermentationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
