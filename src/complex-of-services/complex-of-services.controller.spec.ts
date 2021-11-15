import { Test, TestingModule } from '@nestjs/testing';
import { ComplexServicesController } from './complex-of-services.controller';
import { ComplexOfServicesService } from './complex-of-services.service';

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
