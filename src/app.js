import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import configPasport from './config/passport.js';
import connectDB from './config/connectDB.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Passport 
app.use(passport.initialize());
configPasport(passport);


// Routes
app.use('/api/auth', authRoutes);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
