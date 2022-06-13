import { Router } from 'express';
const router = Router();
import usersRoutes from './users/index.js';
import postsRoutes from './posts/index.js';

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

export default router;