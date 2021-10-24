import {Router} from 'express';
import studentsRouter from './students';

const router = Router();

router.use('/students', studentsRouter);

router.use((error, req, res, next) => {
  console.error(error);

  if (error.status) {
    res.send(error.status).send(error.message);
  } else {
    res.status(500).send('An error has occured!');
  }
});

export default router;