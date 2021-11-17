import { Module } from '@nestjs/common';
import { ComplexOfServicesService } from './complexServices.service';
import { ComplexServicesController } from './complexServices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplexOfServices } from './entities/complexServices.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComplexOfServices])],
  controllers: [ComplexServicesController],
  providers: [ComplexOfServicesService]
})
export class ComplexOfServicesModule {}
