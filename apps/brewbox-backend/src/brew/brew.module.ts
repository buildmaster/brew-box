import { Module } from '@nestjs/common';
import { BrewService } from './brew.service';
import { BrewResolver } from './brew.resolver';

@Module({
  providers: [BrewResolver, BrewService]
})
export class BrewModule {}
