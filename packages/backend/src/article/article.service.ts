import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';
import { GetArticlesDto } from './dto/get-article.dto';
import { EOrderBy, ESort, IArticle } from './article.types';

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
}
