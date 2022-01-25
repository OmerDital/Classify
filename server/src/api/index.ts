import {
  Router, Request, Response, NextFunction,
} from 'express';
import studentsRouter from './students';
import registerRouter from './register';
import { Error } from '../types/error';

const router = Router();

router.use('/students', studentsRouter);
router.use('/register', registerRouter);

router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  if (error.status) {
    res.send(error.status).send(error.message);
  } else {
    res.status(500).send('An error has occurred!');
  }
});

export default router;