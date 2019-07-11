"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../model/user"));

/* eslint-disable max-len */

/* eslint-disable no-useless-escape */
var nameregex = /^[A-Z a-z ]{3,}$/;
var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){8,}/;

var validateSignin = function validateSignin(req, res, next) {
  try {
    if ((!emailregex.test(req.body.email) || !emailregex.test(req.body.email)) && !passwordregex.test(req.body.password)) {
      return res.status(412).json({
        status: 412,
        error: 'Email or Password is Invalid'
      });
    }

    return next();
  } catch (error) {
    res.status(412).json({
      status: 412,
      error: 'Email or Password is Invalid'
    });
  }
};

var validateSignup = function validateSignup(req, res, next) {
  try {
    if (!emailregex.test(req.body.email) && !passwordregex.test(req.body.password) && !nameregex.test(req.body.first_name) && !nameregex.test(req.body.last_name)) {
      return res.status(412).json({
        status: 412,
        error: 'Required Details are not Valid'
      });
    }

    return next();
  } catch (error) {
    res.status(412).json({
      status: 412,
      error: 'Required Details are not Valid'
    });
  }
};

var validateAdmin =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var token, user, isUserAdmin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.authorization || req.headers['x-access-token'];
            token = token.split('Bearer ');

            _jsonwebtoken["default"].verify(token[1], process.env.secret_key, function (err, authData) {
              user = authData;
            });

            _context.next = 6;
            return _user["default"].getUser(user.email);

          case 6:
            isUserAdmin = _context.sent;

            if (!(isUserAdmin.rows[0].is_admin !== true)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", 'user is not an admin');

          case 9:
            return _context.abrupt("return", next());

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.status(400).json({
              status: 400,
              message: 'invalid token'
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function validateAdmin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var userValidator = {
  validateSignup: validateSignup,
  validateSignin: validateSignin,
  validateAdmin: validateAdmin
};
var _default = userValidator;
exports["default"] = _default;