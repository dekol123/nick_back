import { Test, TestingModule } from '@nestjs/testing';
import { CatalogueOfServicesService } from './listOfServices.service';

describe('CatalogueOfServicesService', () => {
  let service: CatalogueOfServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogueOfServicesService],
    }).compile();

    service = module.get<CatalogueOfServicesService>(CatalogueOfServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
