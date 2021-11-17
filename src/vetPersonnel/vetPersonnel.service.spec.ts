import { Test, TestingModule } from '@nestjs/testing';
import { MedicalPersonnelService } from './vetPersonnel.service';

describe('MedicalPersonnelService', () => {
  let service: MedicalPersonnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalPersonnelService],
    }).compile();

    service = module.get<MedicalPersonnelService>(MedicalPersonnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
