// src/index.ts
import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './config/database';
import app from './app';

dotenv.config();

const server = express();
server.use('/api', app);

const PORT = process.env.PORT || 3000;

initDB()
  .then(() => {
    server.listen(PORT, () => {
      console.warn(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Could not start server:', error);
  });
