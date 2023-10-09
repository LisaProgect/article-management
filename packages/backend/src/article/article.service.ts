import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Article, Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';
import { GetArticlesDto } from './dto/get-article.dto';
import { EOrderBy, ESort, IArticle, IArticleRss } from './article.types';
import { CreateArticleDto } from './dto/create-article.dto';
import { CONFIRM_MESSAGES, ERR_MESSAGES } from 'src/common/common.const';
import { UpdateArticleDto } from './dto/update-article.dto';
import { RssArticleDto } from './dto/rss-article.dto';
import * as Parser from 'rss-parser';

@Injectable()
export class ArticleService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  public async getAllArticles(query: GetArticlesDto): Promise<IArticle> {
    const { page, search, orderBy, sort, perPage } = query;
    const where: Prisma.ArticleWhereInput = {};
    const orderByArticle: Prisma.ArticleOrderByWithRelationAndSearchRelevanceInput =
      {};
    if (search) {
      where.title = {
        contains: search.toLocaleLowerCase(),
      };
    }
    switch (orderBy) {
      case EOrderBy.DATE:
        orderByArticle.updatedAt = sort === ESort.ASC ? ESort.ASC : ESort.DESC;
        break;
      case EOrderBy.TITLE:
        orderByArticle.title = sort === ESort.ASC ? ESort.ASC : ESort.DESC;
        break;
    }

    const [article, totalCount] = await this.prisma.$transaction([
      this.prisma.article.findMany({
        where,
        orderBy: orderByArticle,
        include: {
          user: {
            select: {
              id: true,
              lastName: true,
              firstName: true,
            },
          },
        },
        take: perPage || 10,
        skip: (page - 1) * perPage || 0,
      }),
      this.prisma.article.count({ where }),
    ]);

    const metaData = {
      page,
      totalCountOfPages: Math.ceil(totalCount / perPage),
    };

    return { article, metaData };
  }

  public async createArticle(
    user: User,
    articleData: CreateArticleDto,
  ): Promise<Article> {
    try {
      const article = await this.prisma.article.create({
        data: {
          ...articleData,
          userId: user.id,
        },
      });
      return {
        ...article,
      };
    } catch (e) {
      throw new HttpException(
        ERR_MESSAGES.SOMETHING_WRONG,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async deleteArticle(user: User, articleId: string): Promise<string> {
    try {
      await this.prisma.article.delete({
        where: {
          id: articleId,
          userId: user.id,
        },
      });

      return CONFIRM_MESSAGES.DELETED;
    } catch (e) {
      throw new HttpException(
        ERR_MESSAGES.ARTICLE_MANAGE_NOT_ALLOWED,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async updateArticle(
    user: User,
    articleId: string,
    articleData: UpdateArticleDto,
  ): Promise<Article> {
    const article = await this.prisma.article.findFirst({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      throw new HttpException(
        ERR_MESSAGES.ARTICLE_MANAGE_NOT_ALLOWED,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const res = await this.prisma.article.update({
        where: {
          id: articleId,
          userId: user.id,
        },
        data: {
          ...articleData,
        },
      });

      return res;
    } catch (e) {
      throw new HttpException(
        ERR_MESSAGES.ARTICLE_MANAGE_NOT_ALLOWED,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async getUserArticle(userId: string): Promise<Article[]> {
    const article = this.prisma.article.findMany({
      where: {
        userId,
      },
    });

    return article;
  }

  public async getArticleRss(body: RssArticleDto): Promise<IArticleRss[]> {
    const articles = [];
    const parser = new Parser();
    const feed = await parser.parseURL(body.url);
    feed.items.forEach((entry) => articles.push(entry));
    return articles;
  }
}
