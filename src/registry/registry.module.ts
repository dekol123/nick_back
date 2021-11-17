import { Module } from '@nestjs/common';
import { CardsService } from './registry.service';
import { RegistryController } from './registry.controller';
import { Cards } from './entities/registry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cards])],
  controllers: [RegistryController],
  providers: [CardsService]
})
export class CardsModule {}
