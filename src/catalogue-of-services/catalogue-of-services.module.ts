import { Module } from '@nestjs/common';
import { CatalogueOfServicesService } from './catalogue-of-services.service';
import { ListOfServicesController } from './catalogue-of-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueOfServices } from './entities/сatalogue-of-services.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatalogueOfServices])],
  controllers: [ListOfServicesController],
  providers: [CatalogueOfServicesService]
})
export class CatalogueOfServicesModule {}
