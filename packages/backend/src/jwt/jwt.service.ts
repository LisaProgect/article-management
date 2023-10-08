import { Injectable } from '@nestjs/common';
import { JwtService as NativeJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NativeJwtService) {}

  public async generateJwtToken(userId: string): Promise<string> {
    const payload = {
      sub: userId,
    };
    return this.jwtService.signAsync(payload);
  }
}
