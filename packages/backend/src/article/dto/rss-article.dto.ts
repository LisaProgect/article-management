/* eslint-disable no-mixed-spaces-and-tabs */
import { IsString } from 'class-validator';

export class RssArticleDto {
  @IsString()
  public url!: string;
}
