import express from 'express';
import Users from '../controllers/user';
import car from '../controllers/cars';
import order from '../controllers/order';

const router = express.Router();

router.post('/auth/signup', Users.createUsers);
router.post('/car', car.createCar);
router.get('/car/:id', car.getCar);
router.post('/order', order.createOrder);

export default router;
