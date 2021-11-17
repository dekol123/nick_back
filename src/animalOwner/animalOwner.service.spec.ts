import { Test, TestingModule } from '@nestjs/testing';
import { RegisterOfCardsService } from './animalOwner.service';

describe('RegisterOfCardsService', () => {
  let service: RegisterOfCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterOfCardsService],
    }).compile();

    service = module.get<RegisterOfCardsService>(RegisterOfCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
