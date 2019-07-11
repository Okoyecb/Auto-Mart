"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cars = _interopRequireDefault(require("../model/cars"));

/* eslint-disable max-len */

/* eslint-disable camelcase */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */
var createCar = function createCar(req, res) {
  var newCar = {
    owner: req.body.owner,
    created_on: req.body.created_on,
    state: req.body.state,
    status: req.body.status,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    image: req.body.image,
    body_type: req.body.body_type
  };

  _cars["default"].createCar(newCar);

  return res.status(201).json({
    message: 'Car Posted Successfully',
    status: 201,
    data: newCar
  });
};

var getCar = function getCar(req, res) {
  var id = parseInt(req.params.id, 10);

  _cars["default"].getCar(id).then(function (value) {
    var result = value.rows;

    if (result.length > 0) {
      return res.status(200).json({
        status: 'true',
        message: 'Car retrieved successfully',
        data: result
      });
    }

    return res.status(404).json({
      status: 'false',
      message: 'Car not Found'
    });
  });
};

var carStatus = function carStatus(req, res) {
  var status = req.query.status;

  _cars["default"].carStatus(status).then(function (values) {
    if (values.rows.length > 0) {
      var result = values.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result
      });
    }

    return res.status(400).send({
      success: 'Cars not Found'
    });
  });
};

var priceRange = function priceRange(req, res) {
  var _req$query = req.query,
      min_price = _req$query.min_price,
      max_price = _req$query.max_price;

  _cars["default"].priceRange(min_price, max_price).then(function (values) {
    if (values.rows.length > 0) {
      var result = values.rows;
      return res.status(200).send({
        success: 'Success',
        message: 'Cars Retrieved Successfully',
        data: result
      });
    }

    return res.status(404).send({
      success: 'Failed',
      message: 'Cars not Found'
    });
  });
};

var deleteCar =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = parseInt(req.params.id, 10);
            _context.next = 4;
            return _cars["default"].deleteCar(id);

          case 4:
            return _context.abrupt("return", res.status(200).json({
              success: 'true',
              message: 'Car deleted successfully'
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(404).json({
              success: 'false',
              message: 'Car not deleted successfully'
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function deleteCar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateCarStatus = function updateCarStatus(req, res) {
  var id = parseInt(req.params.id, 10);
  var status = req.body.status;

  _cars["default"].getCar(id).then(function (values) {
    var singleCar = values.rows;

    if (singleCar.length > 0) {
      _cars["default"].updateCarStatus(id, status).then(function (value) {
        var result = value.rows;
        return res.status(200).json({
          status: 'Success',
          message: 'Car Status Updated Successfully',
          result: result
        });
      })["catch"](function (error) {
        return res.status(400).json({
          status: 400,
          error: error.message
        });
      });
    } else {
      res.status(404).json({
        status: 'False',
        error: 'Car not found'
      });
    }
  });
};

var getSpecificBodytype = function getSpecificBodytype(req, res) {
  var body_type = req.query.body_type;

  _cars["default"].getSpecificBodytype(body_type).then(function (values) {
    if (values.rows.length > 0) {
      var result = values.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result
      });
    }

    return res.status(404).send({
      success: 'Cars not Found'
    });
  });
};

var carStatusAndState = function carStatusAndState(req, res) {
  var _req$query2 = req.query,
      status = _req$query2.status,
      state = _req$query2.state;

  _cars["default"].carStatusAndState(status, state).then(function (values) {
    if (values.rows.length > 0) {
      var result = values.rows;
      return res.status(200).json({
        status: 200,
        message: 'Cars retrieved successfully',
        data: result
      });
    }

    return res.status(404).json({
      message: 'Cars not Found'
    });
  });
};

var availableAndManufacturer = function availableAndManufacturer(req, res) {
  var _req$query3 = req.query,
      status = _req$query3.status,
      manufacturer = _req$query3.manufacturer;

  _cars["default"].availableAndManufacturer(status, manufacturer).then(function (values) {
    if (values.rows.length > 0) {
      var result = values.rows;
      return res.status(200).json({
        status: 200,
        message: 'Cars retrieved successfully',
        data: result
      });
    }

    return res.status(404).send({
      success: 'Cars not Found'
    });
  });
};

var getAllCars = function getAllCars(req, res) {
  if ('status' in req.query) {
    if ('state' in req.query) {
      carStatusAndState(req, res);
    } else if ('manufacturer' in req.query) {
      availableAndManufacturer(req, res);
    } else {
      carStatus(req, res);
    }
  } else if ('body_type' in req.query) {
    getSpecificBodytype(req, res);
  } else {
    _cars["default"].getAllCars().then(function (value) {
      var result = value.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result
      });
    });
  }
};

var CarController = {
  createCar: createCar,
  getCar: getCar,
  getAllCars: getAllCars,
  deleteCar: deleteCar,
  updateCarStatus: updateCarStatus,
  carStatus: carStatus,
  priceRange: priceRange,
  getSpecificBodytype: getSpecificBodytype,
  carStatusAndState: carStatusAndState,
  availableAndManufacturer: availableAndManufacturer
};
var _default = CarController;
exports["default"] = _default;