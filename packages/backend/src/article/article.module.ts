import { Module, forwardRef } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { JwtService } from 'src/jwt/jwt.service';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [ArticleController],
  providers: [ArticleService, JwtService, PrismaService],
})
export class ArticleModule {}
