import express from 'express';
import { createPost, editPost, deletePost, getPosts } from '../controllers/postController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createPost);
router.put('/:id', authenticate, editPost);
router.delete('/:id', authenticate, deletePost);
router.get('/', getPosts);

export default router;
