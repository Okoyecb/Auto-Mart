/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
import express from 'express';
import Users from '../controllers/user';
import car from '../controllers/cars';
import order from '../controllers/order';
import userValidator from '../middleware/user';
import carsValidator from '../middleware/cars';
import orderValidator from '../middleware/order';
// import VerifyToken from '../middleware/verifyToken';


const {
  validateSignin, validateSignup, validateAdmin,
} = userValidator;

// const { verifyToken } = VerifyToken;

const {
  validateNewPost, validateUpdateStatus,
} = carsValidator;


const {
  validateCreateOrder, validateUpdateOrder,
} = orderValidator;

const {
  createCar, getCar, getAllCars, deleteCar, updateCarStatus, getSpecificBodytype,
} = car;
const { createOrder, getOrder, updateOrder } = order;
const { createUsers } = Users;

const router = express.Router();

router.post('/auth/signup', validateSignup, createUsers);
router.post('/auth/signin', validateSignin, Users.signIn);
router.post('/car', validateNewPost, createCar);
router.get('/car/:id', getCar);
router.get('/car', getAllCars);
router.get('/car/body_type/:body_type', getSpecificBodytype);
router.delete('/car/:id', validateAdmin, deleteCar);
router.patch('/car/:id', validateUpdateStatus, updateCarStatus);
router.post('/order', validateCreateOrder, createOrder);
router.get('/order/:id', getOrder);
router.patch('/order/:id', validateUpdateOrder, updateOrder);

export default router;
