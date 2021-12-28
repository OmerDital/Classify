import { Router } from 'express';
import { createClasses, getClasses } from './controller';

const router = Router();

router.post('/', createClasses);

export default router;