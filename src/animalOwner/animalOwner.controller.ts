import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { RegisterOfCards } from './entities/animalOwner.entity';
import { RegisterOfCardsService } from './animalOwner.service';

@Crud({
  model: {
    type: RegisterOfCards
  }
})

@ApiTags('Animal Owner')
@Controller('animalOwner')
export class AnimalOwnerController implements CrudController<RegisterOfCards>{
  constructor(public service: RegisterOfCardsService) {}
}
