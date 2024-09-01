import express from 'express';
import { initiateStkPush } from '../controllers/stkController.js';

const router = express.Router();

router.post('/push', initiateStkPush);

export default router;
