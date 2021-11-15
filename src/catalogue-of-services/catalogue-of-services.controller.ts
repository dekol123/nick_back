import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CatalogueOfServicesService } from './catalogue-of-services.service';
import { CatalogueOfServices } from './entities/сatalogue-of-services.entity';

@Crud({
  model: {
    type: CatalogueOfServices
  },
  query: {
    alwaysPaginate: false,
    join: {
      complexOfServices:{
        alias: 'complexOfServices',
        eager: true,
      },
      medicalPersonnels: {
        alias: 'medicalPersonnels',
        eager: true,
      }
    }
  }
})

@ApiTags('List of Services')
@Controller('listOfServices')
export class ListOfServicesController implements CrudController<CatalogueOfServices> {
  constructor(public service: CatalogueOfServicesService) {}  
}
