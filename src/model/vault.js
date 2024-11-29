import mongoose from "mongoose";

const vaultSchema = new mongoose.Schema({
    vault : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'vaultContainerModal' , 
        required : true
    },
    title : {
        type : String,
        required : true
    },
    type: { 
        type: String, 
        enum: ['password', 'note', 'file'], 
        required: true 
    },

    data : {
        type : String,
        required : true
    },

    metadata : {
        fileName : {
            type : String
        },
        fileSize : {
            type : Number
        },
        website : {
            type : String
        },
        username : {
            type : String
        }
    },
    createdAt : {
        type : Date,
        default : Date.now
    },

    updatedAt : {
        type : Date,
        default : Date.now
    }
}, { timestamps: true })

const Vault = mongoose.model('Vault', vaultSchema);

export default Vault
