import { Test, TestingModule } from '@nestjs/testing';
import { VetPersonnelController } from './medical-personnel.controller';
import { MedicalPersonnelService } from './medical-personnel.service';

describe('MedicalPersonnelController', () => {
  let controller: VetPersonnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetPersonnelController],
      providers: [MedicalPersonnelService],
    }).compile();

    controller = module.get<VetPersonnelController>(VetPersonnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
