import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ArrivalsService } from './arrivals.service';
import { Arrivals } from './entities/arrivals.entity';

@Crud({
  model: {
    type: Arrivals
  }
})

@ApiTags("Emergency Calls")
@Controller('emergencyCall')
export class EmergencyCall implements CrudController<Arrivals>{
  constructor(public service: ArrivalsService) {}
}
