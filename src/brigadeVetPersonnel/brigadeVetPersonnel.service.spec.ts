import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeMedicalPersonnelService } from './brigadeVetPersonnel.service';

describe('BrigadeMedicalPersonnelService', () => {
  let service: BrigadeMedicalPersonnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrigadeMedicalPersonnelService],
    }).compile();

    service = module.get<BrigadeMedicalPersonnelService>(BrigadeMedicalPersonnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
