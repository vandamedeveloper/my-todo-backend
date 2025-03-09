import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { RegisterUserDto } from '../interfaces/auth.interface';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ApiResponse } from '../interfaces/api-response.interface';

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const dto = plainToInstance(RegisterUserDto, req.body);
      const errors = await validate(dto);

      if (errors.length > 0) {
        const errorMessages: Record<string, string[]> = {};

        errors.forEach((err) => {
          if (err.property && err.constraints) {
            errorMessages[err.property] = Object.values(err.constraints);
          }
        });

        const apiResponse: ApiResponse = {
          success: false,
          message: 'Validation failed',
          errors: errorMessages,
        };

        return res.status(400).json(apiResponse);
      }

      const result = await AuthService.registerUser(dto);
      return res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
      console.error(error);
      const apiResponse: ApiResponse = {
        success: false,
        message: 'Internal Server Error',
        errors: error.message,
      };
      return res.status(500).json(apiResponse);
    }
  }
}
