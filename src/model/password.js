import mongoose from "mongoose";
import crypto from "crypto";

const passwordSchema = new mongoose.Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User' , required : true
    },
    platform : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

passwordSchema.methods.encrypt = async function(plaintext) {
    const algorithm = 'aes-192-cbc';
    const key = crypto.randomBytes(24);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypt = cipher.update(plaintext, 'utf8', 'hex');
    encrypt += cipher.final('hex'); 
    return encrypt;
}
passwordSchema.methods.decrypt = async function(encrypt_password) {
    const algorithm = 'aes-192-cbc';
    const key = crypto.randomBytes(24);
    const iv = crypto.randomBytes(16);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypt = decipher.update(encrypt_password, 'hex', 'utf8');
    decrypt += decipher.final('utf8');
    return decrypt;
}

const Password = mongoose.model('Password', passwordSchema);

export default Password