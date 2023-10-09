import { HttpFactoryService } from "../../shared/services/http-factory.service";
import type { HttpService } from "../../shared/services/http.service";
import { User } from "./auth.type";

class AuthService {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  private readonly module = "auth";

  public async singUp(props: {
    email: string;
    password: string;
  }): Promise<User> {
    return this.httpService.post(`${this.module}/signup`, props);
  }

  public async singIn(props: {
    email: string;
    password: string;
  }): Promise<User> {
    return this.httpService.post(`${this.module}/signin`, props);
  }
}

export const authService = new AuthService(
  new HttpFactoryService().createHttpService()
);
