import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ERR_MESSAGES } from 'src/common/common.const';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  public async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  public async getAllUsers(): Promise<Partial<User>[]> {
    return this.prisma.user.findMany({
      select: { firstName: true, lastName: true, email: true },
    });
  }

  public async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({ data, where });
  }

  public async updateUserProfile(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
    user: User;
  }): Promise<User> {
    const { where, data, user } = params;
    if (data.email && data.email !== user.email) {
      const existedEmail = await this.getUser({ email: data.email as string });
      if (existedEmail) {
        throw new HttpException(
          ERR_MESSAGES.EMAIL_ALREADY_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return this.updateUser({ where, data });
  }
}
