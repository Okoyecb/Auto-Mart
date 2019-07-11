/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import userModel from '../model/user';

dotenv.config();

const secretHash = process.env.secret_key;
const createUsers = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    address,
  } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  const userDetails = {
    first_name,
    last_name,
    email,
    password: hash,
    address,
  };
  try {
    const user = await userModel.createUsers(userDetails);
    const token = jwt.sign(userDetails, secretHash);
    return res.status(201).json({
      status: 'success',
      message: 'User Successfully Created',
      data: user.rows[0],
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'False',
      message: 'Something went wrong',
    });
  }
};

const signIn = async (req, res) => {
  // const userInfo = req.body;
  // console.log(req.body.password);
  const user = await userModel.getUser(req.body.email);
  // const user = results.rows;
  if (user.rowCount < 1) {
    return res.status(404).json({
      status: 'error',
      message: 'User Not Found',
    });
  }
  console.log(user.rows[0].password);
  if (bcrypt.compareSync(req.body.password, user.rows[0].password) === false) {
    return res.status(400).json({
      status: 'error',
      message: 'Password Incorrect',
    });
  }
  const token = jwt.sign(user.rows[0], process.env.secret_key, { expiresIn: '24hr' });

  return res.status(201).json({
    status: 'success',
    message: 'Login Succesful',
    user: user[0],
    token,
  });
};


const UserController = {
  createUsers,
  signIn,
};

export default UserController;
