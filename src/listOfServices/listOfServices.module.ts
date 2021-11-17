import { Module } from '@nestjs/common';
import { CatalogueOfServicesService } from './listOfServices.service';
import { ListOfServicesController } from './listOfServices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueOfServices } from './entities/listOfServices.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatalogueOfServices])],
  controllers: [ListOfServicesController],
  providers: [CatalogueOfServicesService]
})
export class ListOfServicesModule {}
