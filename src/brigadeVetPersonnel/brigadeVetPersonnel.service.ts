import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BrigadeMedicalPersonnel } from "./entities/brigadeVetPersonnel.entity";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class BrigadeMedicalPersonnelService extends TypeOrmCrudService<BrigadeMedicalPersonnel> {  
  constructor(@InjectRepository(BrigadeMedicalPersonnel) repo) {
    super(repo)
  }
}
