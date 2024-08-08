import express, { Request, Response } from 'express';
import greet from './smallModule';
import { complexCalculation } from './bigModule';

const router = express.Router();

router.get('/greet/:name', (req: Request, res: Response) => {
  res.send(greet(req.params.name));
});

router.get('/calculate', (req: Request, res: Response) => {
  const result = complexCalculation(5, 10);
  res.send(`Result: ${result}`);
});

export default router;