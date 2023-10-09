/* eslint-disable no-mixed-spaces-and-tabs */
import { IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto {
  @IsString()
  @IsOptional()
  public title?: string;

  @IsString()
  @IsOptional()
  public description?: string;
}
