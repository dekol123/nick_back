import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { RegisterOfCards } from './entities/register-of-cards.entity';
import { RegisterOfCardsService } from './register-of-cards.service';

@Crud({
  model: {
    type: RegisterOfCards
  }
})

@ApiTags('Register of cards')
@Controller('register-of-cards')
export class RegisterOfCardsController implements CrudController<RegisterOfCards>{
  constructor(public service: RegisterOfCardsService) {}
}
