import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useClass: PubSub,
      // useValue: new PubSub(),
      // useFactory: () => {
      //  return new PubSub();
      // }
    },
  ],
  exports: ['PUB_SUB'],
})
export class PubSubModule {
  public static Keys: {
    NEW_TEMPERATURE_READING: 'NEW_TEMPERATURE_READING';
  };
}
