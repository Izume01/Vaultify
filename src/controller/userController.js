/* eslint-disable no-undef */
import User from '../model/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Registration Controller
const registration = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);   
  

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User Already Exists' });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: 'User Registration Successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Validate the password
    const isMatch = await user.isValidPassword(password); 

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: '24h',
    });

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export  {
    registration,
    login
}