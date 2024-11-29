import mongoose from "mongoose";

const vaultContainerSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    item : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vault',
    },
    title : {
        type : String, 
        required : true
    },
    description  : {
        type : String, 
        required : true
    },
    createdAt : {
        type : Date, 
        default : Date.now
    }
})
const vaultContainerModal = mongoose.model('VaultContainer' , vaultContainerSchema)

export default vaultContainerModal;
