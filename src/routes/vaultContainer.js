import vaultContainerModal from "../model/vaultContainer.js";
import authenticateUser from '../middleware/authenticate.js';
import express from 'express';
import randomSlug from "../utils/slugGenerate.js";

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
        const slugGenerate = randomSlug;
        const newVaultContainer = new vaultContainerModal({
            user: req.user._id,
            title,
            description,
            slug : slugGenerate
        });

        await newVaultContainer.save();
        res.redirect('/')
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

router.put('/updateVaultContainer/:id' , authenticateUser , async(req,res) => {
    try {
        const {id} = req.params;
        const {title , description} =req.body;
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const updatedVault = await vaultContainerModal.findOneAndUpdate({ _id: id, user: req.user._id }, 
            {
                title, 
                description, 
            },  
            { new: true });
        if (!updatedVault) {
            return res.status(404).json({ message: 'Vault not found' });
        }
        res.status(200).json({ message: 'Vault updated successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error})
    }
})

router.delete('/deleteVaultContainer/:id' ,  authenticateUser , async(req,res) => {
    try {
        const {id} = req.params; 

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const vault = await vaultContainerModal.findOneAndDelete({ _id: id, user: req.user._id });
        if (!vault) {
            return res.status(404).json({ message: 'Vault not found' });
        }
        res.status(200).json({ message: 'Vault deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error});
    }
})


export default router;
