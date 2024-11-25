import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import configPasport from './config/passport.js';
import connectDB from './config/connectDB.js';
import authRoutes from './routes/auth.js';
import managerRoutes from './routes/manager.js';
import protectedRoute from './routes/protected_routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
connectDB();

// Set up the views
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDirectoryPath = path.join(__dirname, '..');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(parentDirectoryPath, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Passport 
app.use(passport.initialize());
configPasport(passport);

// Rendering Views
app.get('/register' , (req, res) => {
  res.render("register");
});

app.get('/login' , (req, res) => {
  res.render("login");
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/manager', passport.authenticate('jwt', { session: false }), managerRoutes);
app.use('/', protectedRoute);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
