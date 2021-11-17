import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyCall } from './emergencyCall.controller';
import { ArrivalsService } from './arrivals.service';

describe('ArrivalsController', () => {
  let controller: EmergencyCall;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyCall],
      providers: [ArrivalsService],
    }).compile();

    controller = module.get<EmergencyCall>(EmergencyCall);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
