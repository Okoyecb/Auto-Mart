import express from 'express';
import Users from '../controllers/user';
import car from '../controllers/cars';
import order from '../controllers/order';
import userValidator from '../validator/user';
import carsValidator from '../validator/cars';
import orderValidator from '../validator/order';


const {
  validateSignin, validateSignup,
} = userValidator;


const {
  validateNewPost, validateUpdateStatus,
} = carsValidator;


const {
  validateCreateOrder, validateUpdateOrder,
} = orderValidator;

const router = express.Router();

router.post('/auth/signup', validateSignup, Users.createUsers);
router.post('/auth/signin', validateSignin, Users.signIn);
router.post('/car', validateNewPost, car.createCar);
router.get('/car/:id', car.getCar);
router.get('/car?status=available&min_price=​XXXValue​&max_price=​XXXValue', car.priceRange);
router.get('/car', car.getAllCars);
router.delete('/car/:id', car.deleteCar);
router.patch('/car/:id', validateUpdateStatus, car.updateStatus);
router.post('/order', validateCreateOrder, order.createOrder);
router.get('/order/:id', order.getOrder);
router.patch('/order/:id', validateUpdateOrder, order.updateOrder);

export default router;
