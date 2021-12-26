import { Router } from 'express';
import { getAll, getById, update } from './controller';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);

export default router;