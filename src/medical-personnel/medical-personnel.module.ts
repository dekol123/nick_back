import { Module } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { VetPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnel } from './entities/medical-personnel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MedicalPersonnel])],
  controllers: [VetPersonnelController],
  providers: [MedicalPersonnelService]
})
export class MedicalPersonnelModule {}
