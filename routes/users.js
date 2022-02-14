import express from 'express';
import { getUser, createUser, getUserId, deleteUser, patchUser } from '../controller/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);
export default router;
