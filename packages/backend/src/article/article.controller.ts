import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { IArticle, IArticleRss } from './article.types';
import { GetArticlesDto } from './dto/get-article.dto';
import { IRequest } from 'src/auth/auth.types';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from '@prisma/client';
import { AuthGuard } from 'src/jwt/guards/auth.guard';
import { UpdateArticleDto } from './dto/update-article.dto';
import { RssArticleDto } from './dto/rss-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('articles')
  public async getAllArticles(
    @Query() query: GetArticlesDto,
  ): Promise<IArticle> {
    return this.articleService.getAllArticles(query);
  }

  @UseGuards(AuthGuard)
  @Post('create')
  public async createArticle(
    @Request() req: IRequest,
    @Body() articleData: CreateArticleDto,
  ): Promise<Article | null> {
    return this.articleService.createArticle(req.user, articleData);
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  public async deleteArticle(
    @Request() req: IRequest,
    @Param('id') id: string,
  ): Promise<string> {
    return this.articleService.deleteArticle(req.user, id);
  }

  @UseGuards(AuthGuard)
  @Put('update/:id')
  public async updateArticle(
    @Request() req: IRequest,
    @Body() articleData: UpdateArticleDto,
    @Param('id') id: string,
  ): Promise<Article | null> {
    return this.articleService.updateArticle(req.user, id, articleData);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  public async getUserArticle(
    @Request() req: IRequest,
  ): Promise<Article[] | []> {
    return this.articleService.getUserArticle(req.user.id);
  }

  @Post('rss')
  public async getArticleRss(
    @Body() body: RssArticleDto,
  ): Promise<IArticleRss[] | []> {
    return this.articleService.getArticleRss(body);
  }
}
