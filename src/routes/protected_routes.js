/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const authenticateUser = (req, res, next) => {
  
  
  const token = req.cookies.jwt; // Retrieve the token from cookies
  
  if (!token) {
      return res.status(401).json({ message: 'Unauthorized' }); // No token provided
  }

  try {
      const decoded = jwt.verify(token, process.env.SECRET); // Verify the token
      req.user = decoded; // Attach decoded token payload (user data) to the request object
      next(); // Pass control to the next middleware or route handler
  } catch (error) {
      res.status(403).json({ message: 'Invalid or expired token' , error }); // Deny access
  }
};

 
router.get('/', authenticateUser ,(req, res) => {
  res.render('index');
});

export default router;