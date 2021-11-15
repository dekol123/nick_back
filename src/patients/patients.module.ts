import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { AnimalsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './entities/patients.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patients])],
  controllers: [AnimalsController],
  providers: [PatientsService]
})
export class PatientsModule {}
