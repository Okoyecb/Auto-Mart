import express from 'express';
import Users from '../controllers/user';
import car from '../controllers/cars';

const router = express.Router();

router.post('/auth/signup', Users.createUsers);
router.post('/car', car.createCar);


export default router;
