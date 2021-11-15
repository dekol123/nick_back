import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeVetPersonnel } from './brigade-medical-personnel.controller';
import { BrigadeMedicalPersonnelService } from './brigade-medical-personnel.service';

describe('BrigadeMedicalPersonnelController', () => {
  let controller: BrigadeVetPersonnel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrigadeVetPersonnel],
      providers: [BrigadeMedicalPersonnelService],
    }).compile();

    controller = module.get<BrigadeVetPersonnel>(BrigadeVetPersonnel);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
