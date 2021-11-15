import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyCallGroup } from './brigade.controller';
import { BrigadeService } from './brigade.service';

describe('BrigadeController', () => {
  let controller: EmergencyCallGroup;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyCallGroup],
      providers: [BrigadeService],
    }).compile();

    controller = module.get<EmergencyCallGroup>(EmergencyCallGroup);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
