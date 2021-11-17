import { Test, TestingModule } from '@nestjs/testing';
import { RegistryController } from './registry.controller';
import { CardsService } from './registry.service';

describe('CardsController', () => {
  let controller: RegistryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistryController],
      providers: [CardsService],
    }).compile();

    controller = module.get<RegistryController>(RegistryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
