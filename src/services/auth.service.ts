import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import { ApiResponse } from '../interfaces/api-response.interface';
import {
  RegisterUserData,
  RegisterUserDto,
} from '../interfaces/auth.interface';

export class AuthService {
  static async registerUser(
    dataDTO: RegisterUserDto,
  ): Promise<ApiResponse<RegisterUserData>> {
    const { name, email, password } = dataDTO;
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOneBy({ email });
    if (existingUser) {
      return {
        success: false,
        message: 'Email already in use.',
      };
    }

    // Create new user
    const newUser: User = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    // Save user
    await userRepository.save(newUser);
    return {
      success: true,
      message: 'User created successfully.',
      data: {
        name,
        email,
      },
    };
  }
}
