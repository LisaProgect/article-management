import {
  Body,
  Controller,
  Get,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { AuthGuard } from 'src/jwt/guards/auth.guard';
import { IRequest } from 'src/auth/auth.types';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<Partial<User>[]> {
    return this.userService.getAllUsers();
  }

  @Get('me')
  @UseGuards(AuthGuard)
  public async getMe(@Request() req: IRequest): Promise<User> {
    return this.userService.getUser(req.user);
  }

  @Patch('update')
  @UseGuards(AuthGuard)
  public async updateUser(
    @Request() req: IRequest,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUserProfile({
      data,
      where: { id: req.user.id },
      user: req.user,
    });
  }
}
