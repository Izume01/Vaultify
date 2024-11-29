import Vault from "../model/vault.js";
import { encrypt } from "../utils/encryption.js";

// We have to update this file in which the instead of the user: req.user_id it will be vault 
export const createVault = async(req, res) => {
    try {
        const {title , type , data , metadata} = req.body;
        if(type === "password"){
            const encryptedPassword = encrypt(data); 
            
            const newVault  = new Vault({
                user : req.user._id,
                title,
                type,
                data : encryptedPassword,
                metadata
            })
            await newVault.save();
            res.status(201).json({message : "Vault Created Successfully"});
        }
        if(type == 'note') {
            const encryptedNote = encrypt(data)
                        
            const newVault  = new Vault({
                user : req.user._id,
                title,
                type,
                data : encryptedNote,
                metadata
            })
            await newVault.save();
            res.status(201).json({message : "Vault Created Successfully"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message}); 
    }
}

export const getVaults = async(req,res) => {
    try {
        const vaults = await Vault.find({user : req.user._id});
        res.status(200).json({vaults});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
}

export const updateVault = async(req,res) => {
    try {
        const {id} = req.params;
        const {title , type , data , metadata} = req.body;
        const updatedVault = await Vault.findByIdAndUpdate(id);
        updatedVault.title = title;
        updatedVault.type = type;
        updatedVault.data = data;
        updatedVault.metadata = metadata;
        await updatedVault.save();
        res.status(200).json({message : "Vault Updated Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
}

export const deleteVault = async(req,res) => {
    try {
        const {id} = req.params;
        await Vault.findByIdAndDelete(id);
        res.status(200).json({message : "Vault Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
}

