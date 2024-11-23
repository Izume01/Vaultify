import express from 'express';
import passport from 'passport';

const router = express.Router();

const authenticateUser = passport.authenticate('jwt', { session: false });

router.get('/', authenticateUser ,(req, res) => {
  res.render('index');
});



export default router;