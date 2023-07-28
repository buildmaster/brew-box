import { Module } from '@nestjs/common';
import { FermentationService } from './fermentation.service';
import { FermentationResolver } from './fermentation.resolver';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [PubSubModule],
  providers: [FermentationResolver, FermentationService],
})
export class FermentationModule {}
