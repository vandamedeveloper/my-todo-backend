import express, { Request, Response } from 'express';
import { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default app;
