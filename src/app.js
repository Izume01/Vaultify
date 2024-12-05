import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import configPasport from './config/passport.js';
import connectDB from './config/connectDB.js';
import authRoutes from './routes/auth.js';
import managerRoutes from './routes/manager.js';
import protectedRoute from './routes/protected_routes.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import vaultRoutes from './routes/vault.js';
import vaultContainer from './routes/vaultContainer.js';
import slug from './routes/slug.js';
import vaultGen from './routes/vaultGen.js';

dotenv.config();

const app = express();
connectDB();

// Set up the views
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDirectoryPath = path.join(__dirname, '..');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.static(path.join(parentDirectoryPath, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Passport 
app.use(passport.initialize());
configPasport(passport);

// Rendering Views
app.get('/register', (req, res) => {
  res.render("register");
});

app.get('/login', (req, res) => {
  res.render("login");
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/manager', passport.authenticate('jwt', { session: false }), managerRoutes);
app.use('/', protectedRoute);
app.use('/api/vault', vaultRoutes);
app.use('/api/container', vaultContainer); 
app.use('/', slug);
app.use('/vault', vaultGen);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});