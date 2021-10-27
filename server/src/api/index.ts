import { Router, Request, Response, NextFunction } from 'express';
import {Error} from '../types/error';
import studentsRouter from './students';

const router = Router();

router.use('/students', studentsRouter);

router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  if (error.status) {
    res.send(error.status).send(error.message);
  } else {
    res.status(500).send('An error has occurred!');
  }
});

export default router;
