import PasswordSchema from '../model/password.js';

export const encryptPassword = async (req, res) => {
    try {
        const { platform, username, password } = req.body;
        const encryptedPassword = await PasswordSchema.encrypt(password);
        const newPassword = new PasswordSchema({
            userid: req.user._id,
            platform: platform,
            username: username,
            password: encryptedPassword
        });
        await newPassword.save();
        res.status(201).json({ "message": "Password Encrypted Successfully" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ "message": error.message });
    }
};

export const decryptPassword = async (req, res) => {
    try {
        const { id } = req.params;
        const encryptedPassword = await PasswordSchema.findById(id);
        if (!encryptedPassword) {
            return res.status(404).json({ "message": "Password not found" });
        }
        const decryptedPassword = await PasswordSchema.decrypt(encryptedPassword.password);
        res.status(200).json({ "message": "Password decrypted", "password": decryptedPassword });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ "message": error.message });
    }
};