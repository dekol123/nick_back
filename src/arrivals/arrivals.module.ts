import { Module } from '@nestjs/common';
import { ArrivalsService } from './arrivals.service';
import { EmergencyCall } from './arrivals.controller';
import { Arrivals } from './entities/arrivals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Arrivals])],
  controllers: [EmergencyCall],
  providers: [ArrivalsService]
})
export class ArrivalsModule {}
