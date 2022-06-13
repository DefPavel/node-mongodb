import { Router } from 'express';
import { createPost, deletePost, getPostsByUser } from '../../controllers/posts/post.controllers.js';
const router = Router();

router.get('/:idUser', getPostsByUser ); // get posts by User
router.post('/:idUser', createPost ); // create new Post by User
router.delete('/:id', deletePost ); // delete Posr
export default router;
