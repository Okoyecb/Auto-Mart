"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../model/user"));

/* eslint-disable camelcase */

/* eslint-disable consistent-return */

/* eslint-disable import/no-unresolved */
_dotenv["default"].config();

var secretHash = process.env.secret_key;

var createUsers =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _req$body, first_name, last_name, email, password, address, hash, userDetails, user, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, password = _req$body.password, address = _req$body.address;
            hash = _bcrypt["default"].hashSync(password, 10);
            userDetails = {
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: hash,
              address: address
            };
            _context.prev = 3;
            _context.next = 6;
            return _user["default"].createUsers(userDetails);

          case 6:
            user = _context.sent;
            token = _jsonwebtoken["default"].sign(userDetails, secretHash);
            return _context.abrupt("return", res.status(201).json({
              status: 'success',
              message: 'User Successfully Created',
              data: user.rows[0],
              token: token
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(500).json({
              status: 'False',
              message: 'Something went wrong'
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function createUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var signIn =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var user, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].getUser(req.body.email);

          case 2:
            user = _context2.sent;

            if (!(user.rowCount < 1)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              status: 'error',
              message: 'User Not Found'
            }));

          case 5:
            console.log(user.rows[0].password);

            if (!(_bcrypt["default"].compareSync(req.body.password, user.rows[0].password) === false)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: 'error',
              message: 'Password Incorrect'
            }));

          case 8:
            token = _jsonwebtoken["default"].sign(user.rows[0], process.env.secret_key, {
              expiresIn: '24hr'
            });
            return _context2.abrupt("return", res.status(201).json({
              status: 'success',
              message: 'Login Succesful',
              user: user[0],
              token: token
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var UserController = {
  createUsers: createUsers,
  signIn: signIn
};
var _default = UserController;
exports["default"] = _default;