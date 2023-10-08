import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @IsOptional()
  @Transform((value: any) => {
    const page = Number.parseInt(value.value);
    return page;
  })
  public page!: number;

  @IsInt()
  @IsOptional()
  @Transform((value: any) => {
    const userValue = Number.parseInt(value.value);
    return userValue;
  })
  public perPage!: number;
}
