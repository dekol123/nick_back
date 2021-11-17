import { Module } from '@nestjs/common';
import { DepartmentsService } from './directions.service';
import { DirectionsController } from './directions.controller';
import { Departments } from './entities/directions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Departments])],
  controllers: [DirectionsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
