import { Test, TestingModule } from '@nestjs/testing';
import { VesselResolver } from './vessel.resolver';
import { VesselService } from './vessel.service';

describe('VesselResolver', () => {
  let resolver: VesselResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselResolver, VesselService],
    }).compile();

    resolver = module.get<VesselResolver>(VesselResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
