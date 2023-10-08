import { IsEmail, IsString, IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @Length(1, 50)
  public firstName!: string;

  @IsString()
  @IsOptional()
  @Length(1, 50)
  public lastName!: string;

  @IsEmail()
  @IsOptional()
  public email?: string;
}
