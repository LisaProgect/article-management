import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from 'src/jwt/jwt.service';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, PrismaService, JwtService],
  imports: [
    forwardRef(() => {
      return AuthModule;
    }),
  ],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
