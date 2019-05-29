import express from 'express';
import Users from '../controllers/user';
import car from '../controllers/cars';
import order from '../controllers/order';


const router = express.Router();

router.post('/auth/signup', Users.createUsers);
router.post('/auth/signin', Users.signIn);
router.post('/car', car.createCar);
router.get('/car/:id', car.getCar);
router.get('/car?status=available&min_price=​XXXValue​&max_price=​XXXValue', car.priceRange);
router.get('/car', car.getAllCars);
router.delete('/car/:id', car.deleteCar);
router.patch('/car/:id', car.updateStatus);
router.post('/order', order.createOrder);
router.get('/order/:id', order.getOrder);
router.patch('/order/:id', order.updateOrder);

export default router;
