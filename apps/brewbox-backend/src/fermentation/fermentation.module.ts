import { Module } from '@nestjs/common';
import { FermentationService } from './fermentation.service';
import { FermentationResolver } from './fermentation.resolver';

@Module({
  providers: [FermentationResolver, FermentationService]
})
export class FermentationModule {
  
}
