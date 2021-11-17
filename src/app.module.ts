import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ArrivalsModule } from './emergencyCall/arrivals.module';
import { BrigadeMedicalPersonnelModule } from './brigadeVetPersonnel/brigadeVetPersonnel.module';
import { BrigadeModule } from './emergencyCallGroup/emergencyCallGroup.module';
import { ComplexOfServicesModule } from './complexServices/complexServices.module';
import { ListOfServicesModule } from './listOfServices/listOfServices.module';
import { CardsModule } from './registry/registry.module';
import { DepartmentsModule } from './directions/directions.module';
import { MedicalPersonnelModule } from './vetPersonnel/vetPersonnel.module';
import { PatientsModule } from './animals/animals.module';
import { RegisterOfCardsModule } from './animalOwner/animalOwner.module';
import { NewsModule } from './news/news.module';
import { ComplaintsSuggestionsModule } from './complains-suggestionss/complains-suggestions.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArrivalsModule, BrigadeMedicalPersonnelModule, BrigadeModule, ComplexOfServicesModule, ListOfServicesModule, CardsModule, ComplaintsSuggestionsModule, DepartmentsModule, MedicalPersonnelModule, PatientsModule, RegisterOfCardsModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
