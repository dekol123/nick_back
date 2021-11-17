import { Module } from '@nestjs/common';
import { PatientsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './entities/animals.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patients])],
  controllers: [AnimalsController],
  providers: [PatientsService]
})
export class PatientsModule {}
