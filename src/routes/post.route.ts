import {Router} from 'express';

import {
  getPosts, 
  getPost, 
  createPost, 
  updatePost, 
  deletePost
} from '../controllers/post.controller';

const router = Router()

router.get('/posts', getPosts);

router.get('/post/:id', getPost);

router.post('/post', createPost);

router.put('/post/:id', updatePost);

router.delete('/post/:id', deletePost);

export default router;
