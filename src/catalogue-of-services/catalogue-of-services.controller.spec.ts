import { Test, TestingModule } from '@nestjs/testing';
import { ListOfServicesController } from './catalogue-of-services.controller';
import { CatalogueOfServicesService } from './catalogue-of-services.service';

describe('CatalogueOfServicesController', () => {
  let controller: ListOfServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOfServicesController],
      providers: [CatalogueOfServicesService],
    }).compile();

    controller = module.get<ListOfServicesController>(ListOfServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
