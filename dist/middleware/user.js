"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable max-len */

/* eslint-disable no-useless-escape */
var nameregex = /^[A-Za-z ]{3,}$/;
var emailregex = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
var passwordregex = /^\S{6,}$/;

var validateSignin = function validateSignin(req, res, next) {
  try {
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();

    if ((emailregex.test(req.body.email) || emailregex.test(req.body.email)) && passwordregex.test(req.body.password)) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Email or Password is Invalid'
    });
  }
};

var validateSignup = function validateSignup(req, res, next) {
  try {
    req.body.first_name = req.body.first_name.trim();
    req.body.last_name = req.body.last_name.trim();
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();

    if (emailregex.test(req.body.email) && passwordregex.test(req.body.password) && nameregex.test(req.body.first_name) && nameregex.test(req.body.last_name)) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Required Details are not Valid'
    });
  }
};

var userValidator = {
  validateSignup: validateSignup,
  validateSignin: validateSignin
};
var _default = userValidator;
exports["default"] = _default;