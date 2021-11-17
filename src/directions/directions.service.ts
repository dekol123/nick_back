import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Departments } from './entities/directions.entity';

@Injectable()
export class DepartmentsService extends TypeOrmCrudService<Departments>{  
  constructor(@InjectRepository(Departments) repo) {
    super(repo)
  }
}
