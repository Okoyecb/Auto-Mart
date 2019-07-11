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

/* eslint-disable camelcase */
var cars =
/*#__PURE__*/
function () {
  function cars() {
    (0, _classCallCheck2["default"])(this, cars);
  }

  (0, _createClass2["default"])(cars, null, [{
    key: "createCar",
    value: function createCar(details) {
      var carDetails = {
        owner: details.owner,
        created_on: (0, _moment["default"])().format(),
        state: details.state,
        status: details.status,
        price: details.price,
        manufacturer: details.manufacturer,
        model: details.model,
        image: details.image ? details.image : '',
        body_type: details.body_type
      };
      return new Promise(function (resolve, reject) {
        _connections["default"].query("INSERT INTO car ( owner, created_on, state, status, price, manufacturer, model, image, body_type) VALUES ('".concat(carDetails.owner, "', '").concat(carDetails.created_on, "','").concat(carDetails.state, "', '").concat(carDetails.status, "', '").concat(carDetails.price, "', '").concat(carDetails.manufacturer, "','").concat(carDetails.model, "', '").concat(carDetails.image, "', '").concat(carDetails.body_type, "') returning *")).then(function (results) {
          return resolve(results);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getAllCars",
    value: function getAllCars() {
      return new Promise(function (resolve, reject) {
        _connections["default"].query('SELECT * FROM car').then(function (results) {
          return resolve(results);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getCar",
    value: function getCar(id) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM car WHERE id = ".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "deleteCar",
    value: function deleteCar(id) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("DELETE FROM car WHERE id = ".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "carStatus",
    value: function carStatus(status) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM car WHERE status = '".concat(status, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "priceRange",
    value: function priceRange(min_price, max_price) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM cars WHERE price BETWEEN '".concat(min_price, "' AND '").concat(max_price, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "updateCarStatus",
    value: function updateCarStatus(id, status) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("UPDATE car SET status = '".concat(status, "' WHERE id = ").concat(id, " returning *")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "getSpecificBodytype",
    value: function getSpecificBodytype(body_type) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM car WHERE body_type = '".concat(body_type, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "carStatusAndState",
    value: function carStatusAndState(status, state) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM car WHERE status = '".concat(status, "' and state = '").concat(state, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "availableAndManufacturer",
    value: function availableAndManufacturer(status, manufacturer) {
      return new Promise(function (resolve, reject) {
        _connections["default"].query("SELECT * FROM car WHERE status = '".concat(status, "' and manufacturer = '").concat(manufacturer, "'")).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    } // static UsedAvailableCars() {
    //   return new Promise((resolve, reject) => {
    //     pool.query()
    //       .then(response => resolve(response))
    //       .catch(error => reject(error));
    //   });
    // }

  }]);
  return cars;
}();

var _default = cars;
exports["default"] = _default;