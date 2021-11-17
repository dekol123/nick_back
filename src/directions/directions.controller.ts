import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { DepartmentsService } from './directions.service';
import { Departments } from './entities/directions.entity';

@Crud({
  model: {
    type: Departments
  }
})

@ApiTags('Directions')
@Controller('directions')
export class DirectionsController implements CrudController<Departments>{
  constructor(public service: DepartmentsService) {}  
}
