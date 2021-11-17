import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Patients } from './entities/animals.entity';

@Injectable()
export class PatientsService extends TypeOrmCrudService<Patients>{
  constructor(@InjectRepository(Patients) repo){
    super(repo)
  }
}
