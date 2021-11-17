import { Module } from '@nestjs/common';
import { RegisterOfCardsService } from './animalOwner.service';
import { AnimalOwnerController } from './animalOwner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterOfCards } from './entities/animalOwner.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RegisterOfCards])],
  controllers: [AnimalOwnerController],
  providers: [RegisterOfCardsService]
})
export class RegisterOfCardsModule {}
