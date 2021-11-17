import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Arrivals } from './entities/arrivals.entity';

@Injectable()
export class ArrivalsService extends TypeOrmCrudService<Arrivals>{  
    constructor(@InjectRepository(Arrivals) repo) {
        super(repo)
      }
}
