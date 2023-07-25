import { Test, TestingModule } from '@nestjs/testing';
import { FermentationResolver } from './fermentation.resolver';
import { FermentationService } from './fermentation.service';

describe('FermentationResolver', () => {
  let resolver: FermentationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FermentationResolver, FermentationService],
    }).compile();

    resolver = module.get<FermentationResolver>(FermentationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
