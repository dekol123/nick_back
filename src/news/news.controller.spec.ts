import { Test, TestingModule } from '@nestjs/testing';
import { VetNewsController } from './news.controller';
import { NewsService } from './news.service';

describe('NewsController', () => {
  let controller: VetNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetNewsController],
      providers: [NewsService],
    }).compile();

    controller = module.get<VetNewsController>(VetNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
