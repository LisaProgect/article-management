import { EnhancedWithAuthHttpService } from "../../shared/services/http-auth.service";
import { HttpFactoryService } from "../../shared/services/http-factory.service";
import { GetArticlesParam, GetArticlesRes } from "./article.type";

class ArticleService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService;
  }

  private readonly module = "article";

  public async getArticles(param: GetArticlesParam): Promise<GetArticlesRes> {
    const url = this.httpService.createQueryLink(`${this.module}/articles`, {
      page: param.page,
      perPage: 2,
      orderBy: "title",
      search: param.search,
      sort: param.sort,
    });
    return this.httpService.get(url);
  }
}

export const articleService = new ArticleService(
  new HttpFactoryService().createAuthHttpService()
);
