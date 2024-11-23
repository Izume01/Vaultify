import { encryptPassword , decryptPassword } from "../controller/managerController.js";
import express from "express";

const router = express.Router();

router.post('/encrypt' , encryptPassword);
router.get('/decrypt/:id' , decryptPassword);

export default router;