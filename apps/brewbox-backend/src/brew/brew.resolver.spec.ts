import { Test, TestingModule } from '@nestjs/testing';
import { BrewResolver } from './brew.resolver';
import { BrewService } from './brew.service';

describe('BrewResolver', () => {
  let resolver: BrewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrewResolver, BrewService],
    }).compile();

    resolver = module.get<BrewResolver>(BrewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
