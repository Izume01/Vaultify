import vaultContainerModal from "../model/vaultContainer.js";
import authenticateUser from '../middleware/authenticate.js';
import express from 'express';

const router = express.Router(); 

router.post('/createVaultContainer', authenticateUser, async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const newVaultContainer = new vaultContainerModal({
            user: req.user._id,
            title,
            description
        });

        await newVaultContainer.save();
        res.status(201).json({ message: "Vault Container Created Successfully" });
    } catch (error) {
        console.error('Create vault container error:', error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/getVaultContainers', authenticateUser, async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const Vaults = await vaultContainerModal.find({ user: req.user._id });
        res.status(200).json({ Vaults });
    } catch (error) {
        console.error('Get vaults error:', error);
        res.status(500).json({ message: error.message });
    }
});

export default router;
