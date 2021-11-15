import { Test, TestingModule } from '@nestjs/testing';
import { AnimalOwnerController } from './register-of-cards.controller';
import { RegisterOfCardsService } from './register-of-cards.service';

describe('RegisterOfCardsController', () => {
  let controller: AnimalOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalOwnerController],
      providers: [RegisterOfCardsService],
    }).compile();

    controller = module.get<AnimalOwnerController>(AnimalOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
