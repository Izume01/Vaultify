import { createVault, deleteVault , updateVault , getVaults } from "../controller/vaultControleller.js";
import express from 'express';

const router = express();

router.post('/CreateVault' , createVault)
router.delete('/DeleteVault' , deleteVault)
router.put('/UpdateVault' , updateVault)
router.get('/GetVault' , getVaults);

export default router