"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _routehelper = _interopRequireDefault(require("../helpers/routehelper"));

var _user = _interopRequireDefault(require("../model/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccountValidator =
/*#__PURE__*/
function () {
  function AccountValidator() {
    _classCallCheck(this, AccountValidator);
  }

  _createClass(AccountValidator, null, [{
    key: "createAccountInputValidator",
    value: function createAccountInputValidator(req, res, next) {
      var _req$body = req.body,
          username = _req$body.username,
          email = _req$body.email,
          password = _req$body.password;
      var fields = {
        username: username,
        email: email,
        password: password
      };
      var validator = new _routehelper["default"]();
      validator.validate(fields, 'required|string');

      if (validator.hasErrors) {
        return res.status(400).json({
          errorMessages: validator.getErrors()
        });
      }

      return next();
    }
  }, {
    key: "createAccountDuplicateValidator",
    value: function createAccountDuplicateValidator(req, res, next) {
      var _req$body2 = req.body,
          email = _req$body2.email,
          username = _req$body2.username;

      _user["default"].query("SELECT email from users where email = '".concat(email, "'")).then(function (foundEmail) {
        _user["default"].query("SELECT username from users where username = '".concat(username, "'")).then(function (foundUsername) {
          if (foundEmail.rowCount === 0 && foundUsername.rowCount === 0) {
            return next();
          }

          res.status(409).json({
            status: 409,
            message: 'Credentials already in use',
            error: true
          });
        });
      })["catch"](function (err) {
        return res.status(500).json(err);
      });
    }
  }, {
    key: "loginAccountValidator",
    value: function loginAccountValidator(req, res, next) {
      var _req$body3 = req.body,
          email = _req$body3.email,
          password = _req$body3.password;
      var fields = {
        email: email,
        password: password
      };
      var validator = new _routehelper["default"]();
      validator.validate(fields, 'required|string');

      if (validator.hasErrors) {
        return res.status(400).json({
          errorMessages: validator.getErrors()
        });
      }

      _user["default"].query("SELECT * FROM users Where email = '".concat(email, "' ")).then(function (user) {
        if (user.rowCount > 0) {
          if (_bcrypt["default"].compareSync(password, user.rows[0].password) === false) {
            return res.status(401).json({
              status: 401,
              message: 'Wrong Password'
            });
          }

          req.user = user.rows[0];
          return next();
        }

        return res.status(404).json({
          status: 404,
          message: 'User does not exist',
          error: true
        });
      })["catch"](function (err) {
        return res.status(500).json(err);
      });
    }
  }]);

  return AccountValidator;
}();

var _default = AccountValidator;
exports["default"] = _default;