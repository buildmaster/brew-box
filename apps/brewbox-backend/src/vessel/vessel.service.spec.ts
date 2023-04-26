import { Test, TestingModule } from '@nestjs/testing';
import { VesselService } from './vessel.service';
import { Repository } from 'typeorm';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Vessel } from './entities/vessel.entity';

describe('VesselService', () => {
  let service: VesselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: ':memory:',
          dropSchema: true,
          entities: [Vessel],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Vessel]),
      ],
      providers: [VesselService],
    }).compile();
    const repository = module.get<Repository<Vessel>>(
      getRepositoryToken(Vessel)
    );
    await repository.insert({
      name: 'HLT',
    });
    await repository.insert({
      name: 'Kettle',
    });
    await repository.insert({
      name: 'Mash Tun',
    });
    service = module.get<VesselService>(VesselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should find all vessels', async () => {
    const vessels = await service.findAll();
    expect(vessels).toEqual([
      {
        id: 1,
        name: 'HLT',
      },
      {
        id: 2,
        name: 'Kettle',
      },
      {
        id: 3,
        name: 'Mash Tun',
      },
    ]);
  });
});
