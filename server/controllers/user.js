import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../model/user';

dotenv.config();
const createUsers = (req, res) => {
  const newUser = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    address: req.body.address,
    is_admin: 'false',
  };

  const userDetails = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    address: req.body.address,
  };

  const token = jwt.sign(userDetails, process.env.secret_key);
  newUser.token = token;
  userModel.push(newUser);
  return res.status(201).json({
    status: 201,
    message: 'User successfully created',
    result: newUser,

  });
};


const UserController = {
  createUsers,
};

export default UserController;
