import { Module } from '@nestjs/common';
import { BrewService } from './brew.service';
import { BrewResolver } from './brew.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brew } from './entities/brew.entity';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([Brew]), PubSubModule],
  providers: [BrewResolver, BrewService],
})
export class BrewModule {}
