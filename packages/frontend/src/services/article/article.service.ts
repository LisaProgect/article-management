import { EnhancedWithAuthHttpService } from "../../shared/services/http-auth.service";
import { HttpFactoryService } from "../../shared/services/http-factory.service";
import {
  Article,
  ArticleRss,
  CreateArticlesReq,
  GetArticlesParam,
  GetArticlesRes,
  UpdateArticlesReq,
} from "./article.type";

class ArticleService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService;
  }

  private readonly module = "article";

  public async getArticles(param: GetArticlesParam): Promise<GetArticlesRes> {
    const url = this.httpService.createQueryLink(`${this.module}/articles`, {
      page: param.page,
      perPage: 10,
      orderBy: "title",
      search: param.search,
      sort: param.sort,
    });
    return this.httpService.get(url);
  }

  public async getArticlesByUser(): Promise<Article[] | []> {
    return this.httpService.get(`${this.module}/user`);
  }

  public async updateArticle(
    param: UpdateArticlesReq
  ): Promise<GetArticlesRes> {
    const { id, title, description } = param;
    return this.httpService.put(`${this.module}/update/${id}`, {
      title,
      description,
    });
  }

  public async createArticle(
    param: CreateArticlesReq
  ): Promise<GetArticlesRes> {
    const { title, description } = param;
    return this.httpService.post(`${this.module}/create`, {
      title,
      description,
    });
  }

  public async deleteArticle(id: string): Promise<GetArticlesRes> {
    return this.httpService.delete(`${this.module}/delete/${id}`);
  }

  public async getRss(body: { url: string }): Promise<ArticleRss[] | []> {
    return this.httpService.post(`${this.module}/rss`, body);
  }
}

export const articleService = new ArticleService(
  new HttpFactoryService().createAuthHttpService()
);
