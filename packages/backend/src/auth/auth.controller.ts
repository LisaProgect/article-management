import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  public async signup(@Body() userData: AuthDto): Promise<User> {
    return this.authService.singup(userData);
  }

  @Post('signin')
  signin(@Body() userData: AuthDto): Promise<User> {
    return this.authService.signin(userData);
  }
}
