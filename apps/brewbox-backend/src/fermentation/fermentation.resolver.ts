import { Resolver, Query, Subscription } from '@nestjs/graphql';
import {
  FermentationReading,
  FermentationService,
} from './fermentation.service';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';
import { SUBSCRIPTION_KEYS } from '../constants';

@Resolver(() => FermentationReading)
export class FermentationResolver {
  constructor(
    private readonly fermentationService: FermentationService,
    @Inject('PUB_SUB') private subscriptionPubSub: PubSub,
  ) {}

  @Query(() => FermentationReading, { name: 'fermentation' })
  getCurrentReading() {
    return this.fermentationService.getCurrentReading();
  }

  @Subscription(() => FermentationReading, {
    name: 'fermentationReading',
  })
  subscibeToNewFermentationReadings() {
    return this.subscriptionPubSub.asyncIterator(
      `${SUBSCRIPTION_KEYS.NEW_FERMENT_READING}`,
    );
  }
}
