import express, { Request, Response } from 'express';
import { Application } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes';
dotenv.config();

const app: Application = express();

app.use(express.json());

app.use('/auth', authRouter);
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default app;
