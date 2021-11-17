import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CardsService } from './registry.service';
import { Cards } from './entities/registry.entity';

@Crud({
  model: {
    type: Cards
  }
})

@ApiTags('Registry')
@Controller('registry')
export class RegistryController implements CrudController<Cards> {
  constructor(public service: CardsService) {}
}
