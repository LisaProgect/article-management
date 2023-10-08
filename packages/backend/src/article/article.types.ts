import { Article } from '@prisma/client';
import { IMetaData } from 'src/common/common.types';

export enum EOrderBy {
  DATE = 'date',
  TITLE = 'title',
}

export enum ESort {
  ASC = 'asc',
  DESC = 'desc',
}

export interface IArticle {
  article: Article[];
  metaData: IMetaData;
}
