// src/config/database.ts
import { DataSource } from 'typeorm';

/**
 * DataSource principal de la aplicación
 */
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3307', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'my-secret-pw',
  database: process.env.DB_NAME || 'my_todo_db',
  synchronize: false, // Activarlo solo en desarrollo, no en producción
  logging: false,
  entities: [], // Aquí luego añadiremos nuestras entidades
});

/**
 * Función para inicializar la conexión a la base de datos
 */
export async function initDB() {
  try {
    await AppDataSource.initialize();
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Error connecting to DB:', error);
    throw error; // Si la conexión falla, relanzamos el error para no iniciar el servidor
  }
}
