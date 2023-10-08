import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { ERR_MESSAGES, PASSWORD_REG_EXP } from 'src/common/common.const';

export class AuthDto {
  @IsEmail()
  @Length(1, 50)
  public readonly email!: string;

  @IsString()
  @Length(5, 50)
  @Matches(PASSWORD_REG_EXP, { message: ERR_MESSAGES.WRONG_PASSWORD })
  public password!: string;
}
