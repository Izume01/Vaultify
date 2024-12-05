import Vault from '../model/vault.js';
import VaultContainer from '../model/vaultContainer.js'; // Adjust import path as needed

export const createVault = async (req, res) => {
    try {
        const { containerId, title, type, data, metadata } = req.body;

        // Validate input
        if (!containerId || !title || !type || !data) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Find the container
        const container = await VaultContainer.findById(containerId);
        if (!container) {
            return res.status(404).json({ message: 'Container not found' });
        }

        // Create new vault item
        const newVault = new Vault({
            container: container._id,
            title,
            type,
            data,
            metadata: metadata || {}
        });

        await newVault.save();

        res.status(201).json({ 
            message: 'Vault item created successfully', 
            vault: newVault 
        });
    } catch (error) {
        console.error('Vault creation error:', error);
        res.status(500).json({ 
            message: 'Server error creating vault item',
            error: error.message 
        });
    }
};