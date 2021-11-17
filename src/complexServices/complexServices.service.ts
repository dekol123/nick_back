import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ComplexOfServices } from './entities/complexServices.entity';

@Injectable()
export class ComplexOfServicesService extends TypeOrmCrudService<ComplexOfServices> {
  constructor(@InjectRepository(ComplexOfServices) repo) {
    super(repo)
  }
}
