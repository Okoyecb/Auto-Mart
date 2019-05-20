import express from 'express';
import UserController from '../controllers/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Automart app');
});

router.post('/api/v1/auth/signup');


export default router;
