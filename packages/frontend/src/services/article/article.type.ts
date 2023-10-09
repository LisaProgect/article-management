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
