import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { IArticle } from './article.types';
import { GetArticlesDto } from './dto/get-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('articles')
  public async getAllArticles(
    @Query() query: GetArticlesDto,
  ): Promise<IArticle> {
    return this.articleService.getAllArticles(query);
  }
}
