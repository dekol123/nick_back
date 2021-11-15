import { Test, TestingModule } from '@nestjs/testing';
import { DirectionsController } from './departments.controller';
import { DepartmentsService } from './departments.service';

describe('DepartmentsController', () => {
  let controller: DirectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectionsController],
      providers: [DepartmentsService],
    }).compile();

    controller = module.get<DirectionsController>(DirectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
