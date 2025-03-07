// src/config/database.ts
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { resolve } from 'path';
import { Task } from '../entities/Task';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3307', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'my-secret-pw',
  database: process.env.DB_NAME || 'my_todo_db',
  synchronize: false,
  logging: false,
  entities: [User, Task],
  migrations: [resolve(__dirname, '../migrations/*.{ts,js}')],
});

export async function initDB() {
  try {
    await AppDataSource.initialize();
    console.warn('DB connected successfully');
  } catch (error) {
    console.error('Error connecting to DB:', error);
    throw error;
  }
}
