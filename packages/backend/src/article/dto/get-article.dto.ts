/* eslint-disable no-mixed-spaces-and-tabs */
import { IsOptional, IsString, IsDateString } from 'class-validator';
import { EOrderBy, ESort } from '../article.types';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class GetArticlesDto extends PaginationDto {
  @IsString()
  @IsOptional()
  public search?: string;

  @IsString()
  @IsOptional()
  public orderBy?: EOrderBy;

  @IsString()
  @IsOptional()
  public sort?: ESort;

  @IsDateString()
  @IsOptional()
  public byDate?: string;
}
