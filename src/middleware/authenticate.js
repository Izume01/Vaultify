/* eslint-disable no-undef */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authenticateUser = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = { _id: decoded.id };

        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' , error});
    }
};

export default authenticateUser;
