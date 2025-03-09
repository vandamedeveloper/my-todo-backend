export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  errors?: string | string[] | Record<string, string[]>;
  data?: T;
}
