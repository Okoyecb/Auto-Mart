/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import userModel from '../model/user';

const nameregex = /^[A-Z a-z ]{3,}$/;
const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){8,}/;


const validateSignin = (req, res, next) => {
  try {
    if ((!emailregex.test(req.body.email) || !emailregex.test(req.body.email))
            && !passwordregex.test(req.body.password)) {
      return res.status(412).json({
        status: 412,
        error: 'Email or Password is Invalid',
      });
    }
    return next();
  } catch (error) {
    res.status(412).json({
      status: 412,
      error: 'Email or Password is Invalid',
    });
  }
};


const validateSignup = (req, res, next) => {
  try {
    if (!emailregex.test(req.body.email) && !passwordregex.test(req.body.password) && !nameregex.test(req.body.first_name)
            && !nameregex.test(req.body.last_name)) {
      return res.status(412).json({
        status: 412,
        error: 'Required Details are not Valid',
      });
    }
    return next();
  } catch (error) {
    res.status(412).json({
      status: 412,
      error: 'Required Details are not Valid',
    });
  }
};

const validateAdmin = async (req, res, next) => {
  try {
    let token = req.headers.authorization || req.headers['x-access-token'];

    token = token.split('Bearer ');
    let user;
    jwt.verify(token[1], process.env.secret_key, (err, authData) => {
      user = authData;
    });
    const isUserAdmin = await userModel.getUser(user.email);
    if (isUserAdmin.rows[0].is_admin !== true) {
      return 'user is not an admin';
    }
    return next();
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: 'invalid token',
    });
  }
};

const userValidator = {
  validateSignup, validateSignin, validateAdmin,
};

export default userValidator;
