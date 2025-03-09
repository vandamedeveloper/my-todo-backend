import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name: string;

  @IsEmail({}, { message: 'Email format is not valid.' })
  @MaxLength(255, { message: 'Email cannot exceed 255 characters' })
  email: string;

  @IsNotEmpty({ message: 'Email cannot exceed 255 characters' })
  @MaxLength(100, { message: 'Password cannot exceed 100 characters' })
  @MinLength(8, { message: 'Password must have at least 8 characters' })
  password: string;
}

export interface RegisterUserData {
  name: string;
  email: string;
}
