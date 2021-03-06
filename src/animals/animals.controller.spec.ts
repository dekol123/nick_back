import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { PatientsService } from './animals.service';

describe('PatientsController', () => {
  let controller: AnimalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers: [PatientsService],
    }).compile();

    controller = module.get<AnimalsController>(AnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
