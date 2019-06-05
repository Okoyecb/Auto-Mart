"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = _interopRequireDefault(require("../model/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */

/* eslint-disable import/no-unresolved */
_dotenv["default"].config();

var createUsers = function createUsers(req, res) {
  var newUser = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    address: req.body.address,
    is_admin: 'false'
  };
  var userDetails = {
    id: 23,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    address: req.body.address,
    token: 'kjhgvkysbtgvxg'
  };

  var token = _jsonwebtoken["default"].sign(userDetails, process.env.secret_key);

  newUser.token = token;

  _user["default"].push(newUser);

  return res.status(201).json({
    status: 201,
    message: 'User successfully created',
    result: newUser
  });
};

var signIn = function signIn(req, res) {
  var userInfo = req.body;

  var verifiedUser = _user["default"].find(function (databaseUser) {
    return databaseUser.email === userInfo.email;
  });

  if (!verifiedUser) {
    res.status(404).json({
      status: 'error',
      message: 'User Not Found'
    });
  } else {
    if (verifiedUser.password === userInfo.password) {
      var payload = {
        id: userInfo.id,
        email: userInfo.email,
        isAdmin: userInfo.isAdmin
      };

      _jsonwebtoken["default"].sign(payload, process.env.secret_key, function (err, token) {
        if (err) {
          throw err;
        } else {
          res.status(201).json({
            status: 'success',
            token: "".concat(token),
            message: 'Login Succesful'
          });
        }
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'Password Incorrect'
      });
    }

    return false;
  }
};

var UserController = {
  createUsers: createUsers,
  signIn: signIn
};
var _default = UserController;
exports["default"] = _default;