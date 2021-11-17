import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Brigade } from './entities/emergencyCallGroup.entity';

@Injectable()
export class BrigadeService extends TypeOrmCrudService<Brigade> {
  constructor(@InjectRepository(Brigade) repo){
    super(repo);
  }
}
