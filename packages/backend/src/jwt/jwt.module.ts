import { Global, Module } from '@nestjs/common';
import { JwtService } from './jwt.service';

import { JwtModule as NativeJwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    NativeJwtModule.register({
      global: true,
      signOptions: {
        expiresIn: '7d',
      },
      secret: process.env['JWT_SECRET'] ?? 'www@qweqwezzz',
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
