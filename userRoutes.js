import express from 'express';
import { register, login, updateProfile, getUser } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/profile', authenticate, updateProfile);
router.get('/:id', authenticate, getUser);

export default router;
