export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  userId: string;
  user: {
    id: string;
    lastName: string;
    firstName: string;
  };
};

export type GetArticlesRes = {
  article: Article[];
  metaData: {
    page?: number;
    totalCountOfPages: number;
  };
};

export type GetArticlesParam = {
  page: string | number;
  search: string;
  sort: string;
};

export type UpdateArticlesReq = {
  title: string;
  description: string;
  id: string;
};

export type CreateArticlesReq = {
  title: string;
  description: string;
};

export type ArticleRss = {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  "content:encodedSnippet": string;
  enclosure: {
    url: string;
    type: string;
    length: string;
  };
  "dc:creator": string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
};
