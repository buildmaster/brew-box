import { Inject, Injectable } from '@nestjs/common';
import { CreateBrewInput } from './dto/create-brew.input';
import { UpdateBrewInput } from './dto/update-brew.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Brew } from './entities/brew.entity';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

const apiRoot = new URL('https://api.brewfather.app/');
const getBatchesPath = '/v1/batches';
const apiAuthHeader =
  'Basic WkVkbTF4VWVQcVdQcTVKa09NZEJXUnQwSmhpMjpzUGZEeU5XVWtYMFNTUWJzOWhRMldqU1pHS1JkRzlKRWNNd0NDN1BlOU5UeWRZZUR0OXJGNk5HWWE4aGI5bEZp';

type BFBatch = {
  _id: string;
  name: string;
  batchNo: number;
  status: string;
  brewDate: number;
  recipe: {
    name: string;
  };
};
@Injectable()
export class BrewService {
  constructor(
    @InjectRepository(Brew)
    private brewRepository: Repository<Brew>,
    @Inject('PUB_SUB') private probePubSub: PubSub,
  ) {}

  create(createBrewInput: CreateBrewInput) {
    return 'This action adds a new brew';
  }

  findAll() {
    const uri = apiRoot;
    uri.pathname = getBatchesPath;
    uri.search = new URLSearchParams({
      order_by_direction: 'DESC',
      order_by: 'brewDate',
    }).toString();
    return Promise.all([
      fetch(uri.toString(), {
        headers: {
          Authorization: apiAuthHeader,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((results): BFBatch[] => {
          return results.map((brew) => {
            return brew as BFBatch;
          });
        }),
      this.brewRepository.find(),
    ]).then(([bfBatches, brews]) => {
      return bfBatches.map((batch) => {
        let matchingBrew = brews.find((brew) => brew.batchId === batch._id);
        if (!matchingBrew) {
          matchingBrew = new Brew();
          matchingBrew.batchId = batch._id;
        }
        this.mapBrewFields(matchingBrew, batch);
        return matchingBrew;
      });
    });
  }
  mapBrewFields(brew: Brew, batch: BFBatch) {
    brew.name = batch.name;
    brew.date = new Date(batch.brewDate);
    brew.status = batch.status;
  }

  findOne(id: number) {
    return `This action returns a #${id} brew`;
  }

  update(id: number, updateBrewInput: UpdateBrewInput) {
    return `This action updates a #${id} brew`;
  }

  remove(id: number) {
    return `This action removes a #${id} brew`;
  }
}
