import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ComplexOfServicesService } from './complexServices.service';
import { ComplexOfServices } from './entities/complexServices.entity';

@Crud({
  model: {
    type: ComplexOfServices
  },
  query: {
    alwaysPaginate: false,
    join: {
      catalogueOfServices:{
        alias: 'catalogueOfServices',
        eager: true,
      }
    }
  }
})

@ApiTags('Complex of services')
@Controller('complexServices')
export class ComplexServicesController implements CrudController<ComplexOfServices> {
  constructor(public service: ComplexOfServicesService) {}  
}
