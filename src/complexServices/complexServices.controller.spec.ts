import { Test, TestingModule } from '@nestjs/testing';
import { ComplexServicesController } from './complexServices.controller';
import { ComplexOfServicesService } from './complexServices.service';

describe('ComplexOfServicesController', () => {
  let controller: ComplexServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplexServicesController],
      providers: [ComplexOfServicesService],
    }).compile();

    controller = module.get<ComplexServicesController>(ComplexServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
