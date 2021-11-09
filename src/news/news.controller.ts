import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { News } from './entities/news.entity';
import { NewsService } from './news.service';

@Crud({
  model: {
    type: News
  }
})

@ApiTags('News')
@Controller('news')
export class NewsController implements CrudController<News>{
  constructor(public service: NewsService) {}
}
