/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import vaultContainerModal from '../model/vaultContainer.js';
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

const slug = () => {
  router.get('/container/:slug', async (req, res) => {
    try {
        const { slug } = req.params; 
        const container = await vaultContainerModal.findOne({ slug })
        if (!container) {
            return res.status(404).send('Container not found');
        }

        res.render('container');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
  });
}
 
router.get('/', authenticateUser ,(req, res) => {
  res.render('index');
  slug();
});

export default router;