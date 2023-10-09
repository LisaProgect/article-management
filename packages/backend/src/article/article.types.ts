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

export interface IArticleRss {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  enclosure: {
    url: string;
    type: string;
    length: string;
  };
  'dc:creator': string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
}
