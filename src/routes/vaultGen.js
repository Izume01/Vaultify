import {createVault} from '../controller/vault.js';
import express from 'express';

const router = express.Router();

router.post('/CreateVault' , createVault)

export default router
