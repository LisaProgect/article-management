import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtService } from 'src/jwt/jwt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [AuthService],
  imports: [
    forwardRef(() => {
      return UserModule;
    }),
  ],
})
export class AuthModule {}
