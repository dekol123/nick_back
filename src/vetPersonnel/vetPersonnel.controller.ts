import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalPersonnelService } from './vetPersonnel.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MedicalPersonnel } from './entities/medical-personnel.entity';

@Crud({
  model:{
    type: MedicalPersonnel
  }
})

@ApiTags('Vet Personnel')
@Controller('vetPersonnel')
export class VetPersonnelController implements CrudController<MedicalPersonnel>{
  constructor(public service: MedicalPersonnelService) {}
}
