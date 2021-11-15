import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { VetNewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';

@Module({
  imports:[TypeOrmModule.forFeature([News])],
  controllers: [VetNewsController],
  providers: [NewsService]
})
export class NewsModule {}
