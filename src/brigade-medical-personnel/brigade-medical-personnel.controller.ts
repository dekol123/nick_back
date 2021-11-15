import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';
import { BrigadeMedicalPersonnel } from './entities/brigade-medical-personnel.entity';

@Crud({
  model: {
    type: BrigadeMedicalPersonnel
  }
})

@ApiTags('Brigade Vet Personnel')
@Controller('brigadeVetPersonnel')
export class BrigadeVetPersonnel implements CrudController<BrigadeMedicalPersonnel>{
  constructor(public service: BrigadeMedicalPersonnelService) {}
}
