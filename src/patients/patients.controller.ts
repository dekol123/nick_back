import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Patients } from './entities/patients.entity';
import { PatientsService } from './patients.service';

@Crud({
  model: {
    type: Patients
  }
})

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {
  constructor(public service: PatientsService) {}
}
