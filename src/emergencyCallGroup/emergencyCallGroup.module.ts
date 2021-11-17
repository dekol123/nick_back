import { Module } from '@nestjs/common';
import { BrigadeService } from './emergencyCallGroup.service';
import { EmergencyCallGroup } from './emergencyCallGroup.controller';
import { Brigade } from './entities/emergencyCallGroup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Brigade])],
  controllers: [EmergencyCallGroup],
  providers: [BrigadeService]
})
export class BrigadeModule {}
