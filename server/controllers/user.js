/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import bcrypt from 'bcrypt';
import userModel from '../model/user';

dotenv.config();
const createUsers = (req, res) => {
  const newUser = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    address: req.body.address,
    is_admin: 'false',
  };

  const userDetails = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    address: req.body.address,
    token: 'kjhgvkysbtgvxg',
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

const signIn = (req, res) => {
  const userData = req.body;
  const verifiedUser = userModel.find(
    databaseUser => databaseUser.email === userData.email,
  );
  if (!verifiedUser) {
    res.status(404).json({ status: 'error', message: 'User Not Found' });
  } else {
    if (verifiedUser.password === userData.password) {
      const payload = {
        id: userData.id,
        email: userData.email,
        isAdmin: userData.isAdmin,
      };
      jwt.sign(payload, process.env.secret_key, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.status(201).json({
            status: 'success',
            token: `Bearer ${token}`,
            message: 'Login Succesful',
            first_name: 'testing oo',
          });
        }
      });
    } else {
      return res
        .status(400)
        .json({ status: 'error', message: 'Password Incorrect' });
    }
    return false;
  }
};
const UserController = {
  createUsers, signIn,
};

export default UserController;
