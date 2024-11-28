import crypto from "crypto";

const encryptionKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

export const encrypt = (text) => {
    const cipher = crypto.createCipheriv('aes-256-cbc' , encryptionKey , iv);
    let encrypted = cipher.update(text , 'utf-8' , 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

export const decrypt = (text) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc' , encryptionKey , iv);
    let decrypted = decipher.update(text , 'hex' , 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}