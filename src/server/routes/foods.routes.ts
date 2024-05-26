import { Router } from 'express';
import { getFoods } from '../../controllers/getFoods.controller';
import { getFoodById } from '../../controllers/getFoodById.controller';

const router = Router();

router.get('', getFoods);
router.get('/:id', getFoodById);

export default router;
