import { Module } from '@nestjs/common';
import { BrigadeMedicalPersonnelService } from './brigadeVetPersonnel.service';
import { BrigadeVetPersonnel } from './brigadeVetPersonnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrigadeMedicalPersonnel } from './entities/brigadeVetPersonnel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BrigadeMedicalPersonnel])],
  controllers: [BrigadeVetPersonnel],
  providers: [BrigadeMedicalPersonnelService]
})
export class BrigadeMedicalPersonnelModule {}
