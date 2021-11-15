import { Module } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { EmergencyCallGroup } from './brigade.controller';
import { Brigade } from './entities/brigade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Brigade])],
  controllers: [EmergencyCallGroup],
  providers: [BrigadeService]
})
export class BrigadeModule {}
