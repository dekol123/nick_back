import { Module } from '@nestjs/common';
import { MedicalPersonnelService } from './vetPersonnel.service';
import { VetPersonnelController } from './vetPersonnel.controller';
import { MedicalPersonnel } from './entities/medical-personnel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalPersonnel])],
  controllers: [VetPersonnelController],
  providers: [MedicalPersonnelService]
})
export class MedicalPersonnelModule {}
