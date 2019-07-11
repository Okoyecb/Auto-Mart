"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _connections = _interopRequireDefault(require("../database/connections"));

var User =
/*#__PURE__*/
function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
  }

  (0, _createClass2["default"])(User, null, [{
    key: "createUsers",
    value: function createUsers(details) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("INSERT INTO users ( first_name, last_name, email, password, address, token) VALUES ('".concat(details.first_name, "', '").concat(details.last_name, "','").concat(details.email, "', '").concat(details.password, "', '").concat(details.address, "', '").concat(details.token, "') returning *")).then(function (results) {
          return resolve(results);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getUser",
    value: function getUser(email) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM users WHERE email = '".concat(email, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "storeUserToken",
    value: function storeUserToken(id, token) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("UPDATE users SET token =  '".concat(token, "' WHERE id = ").concat(id, " returning *")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getUserByToken",
    value: function getUserByToken(token) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM users WHERE token =  '".concat(token, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }]);
  return User;
}();

var _default = User;
exports["default"] = _default;