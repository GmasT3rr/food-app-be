import { Router } from 'express';
import exampleRoutes from './example.routes';
import foods from './foods.routes';
import { authToken } from '../../token';

const router = Router();

// router.use('/example', exampleRoutes);
router.use('/foods', foods);
router.use('/token', authToken);

export default router;
