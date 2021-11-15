import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { RegistryController } from './cards.controller';
import { Cards } from './entities/cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cards])],
  controllers: [RegistryController],
  providers: [CardsService]
})
export class CardsModule {}
