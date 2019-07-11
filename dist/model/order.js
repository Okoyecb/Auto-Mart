"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _connections = _interopRequireDefault(require("../database/connections"));

var orders =
/*#__PURE__*/
function () {
  function orders() {
    (0, _classCallCheck2["default"])(this, orders);
  }

  (0, _createClass2["default"])(orders, null, [{
    key: "createOrder",
    value: function createOrder(details) {
      var orderDetails = {
        buyer: details.buyer,
        car_id: details.car_id,
        created_on: (0, _moment["default"])().format(),
        status: details.status,
        price_offered: details.price_offered
      };
      return new Promise(function (resolve, reject) {
        _connections["default"].query("INSERT INTO orders ( buyer, car_id, created_on, status, price_offered) VALUES ('".concat(orderDetails.buyer, "', '").concat(orderDetails.car_id, "','").concat(orderDetails.created_on, "', '").concat(orderDetails.status, "', '").concat(orderDetails.price_offered, "') returning *")).then(function (results) {
          return resolve(results);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getOrder",
    value: function getOrder(id) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM orders WHERE id = ".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, oldPrice, newPrice) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("UPDATE orders SET old_price_offered = ".concat(oldPrice, ", new_price_offered = ").concat(newPrice, " WHERE id = ").concat(id, " returning *")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }]);
  return orders;
}();

var _default = orders;
exports["default"] = _default;