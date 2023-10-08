import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { UserService } from 'src/user/user.service';
import { JwtService } from 'src/jwt/jwt.service';
import { Prisma, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CONFIRM_MESSAGES, ERR_MESSAGES } from 'src/common/common.const';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async setUserJwt(
    id: string,
    newJwt: boolean = true,
    data?: Prisma.UserUpdateInput,
  ): Promise<User> {
    let jwt = null;

    if (newJwt) {
      jwt = await this.jwtService.generateJwtToken(id);
    }
    return await this.userService.updateUser({
      where: {
        id,
      },
      data: {
        jwt,
        ...data,
      },
    });
  }

  public async signin(data: AuthDto): Promise<User> {
    const { email, password } = data;

    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new ForbiddenException(ERR_MESSAGES.CREDENTIAL_INCORRECT);
    }

    try {
      if (await argon.verify(user.password, password)) {
        return this.setUserJwt(user.id);
      }
    } catch (error) {
      throw new ForbiddenException(ERR_MESSAGES.CREDENTIAL_INCORRECT);
    }
  }

  public async singup(data: AuthDto): Promise<User> {
    const hash = await argon.hash(data.password);

    try {
      const user = await this.userService.createUser({
        ...data,
        password: hash,
      });

      return this.setUserJwt(user.id);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(ERR_MESSAGES.CREDENTIAL_INCORRECT);
        }
      }
      throw error;
    }
  }

  public async logOutUser(userId: string): Promise<string> {
    try {
      await this.setUserJwt(userId, false);
      return CONFIRM_MESSAGES.COMPLETED;
    } catch (e) {
      throw new HttpException(
        ERR_MESSAGES.SOMETHING_WRONG,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
