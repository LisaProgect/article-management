/* eslint-disable no-mixed-spaces-and-tabs */
import { IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  public title!: string;

  @IsString()
  public description!: string;
}
