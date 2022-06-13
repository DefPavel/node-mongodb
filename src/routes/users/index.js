import { Router } from 'express';
import { getUsers, createUser, deleteUser, findUserById } from '../../controllers/users/user.controllers.js';
const router = Router();

router.get('/', getUsers); // get All users
router.get('/:id', findUserById); // get User by Id
router.post('/', createUser ); // create new User
router.delete('/:id', deleteUser ); // delete User
export default router;