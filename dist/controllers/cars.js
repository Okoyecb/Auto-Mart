"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cars = _interopRequireDefault(require("../model/cars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable camelcase */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */
var createCar = function createCar(req, res) {
  var newCar = {
    id: 101,
    owner: req.body.owner,
    created_on: req.body.created_on,
    state: req.body.state,
    status: req.body.status,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    body_type: req.body.body_type
  };

  _cars["default"].push(newCar);

  return res.status(201).json({
    message: 'Car Posted Successfully',
    status: 201,
    data: newCar
  });
};

var getCar = function getCar(req, res) {
  var id = parseInt(req.params.id, 10);

  var singleCar = _cars["default"].find(function (car) {
    return car.id === id;
  });

  if (!singleCar) {
    return res.status(404).json({
      status: 'success',
      message: 'Car not Found'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Car Successfully Retrieved',
    singleCar: singleCar
  });
};

var carStatus = function carStatus(req, res) {
  var status = req.query.status;

  var filtered = _cars["default"].filter(function (cars) {
    return cars.status === status;
  });

  if (filtered.length > 0) {
    return res.status(200).send({
      success: 'true',
      message: 'Car retrieved successfully',
      filtered: filtered
    });
  }

  return res.status(400).send({
    success: 'false'
  });
};

var priceRange = function priceRange(req, res) {
  var _req$query = req.query,
      status = _req$query.status,
      min_price = _req$query.min_price,
      max_price = _req$query.max_price;

  var availableCars = _cars["default"].filter(function (order) {
    return order.status === status;
  });

  if (availableCars.length > 0) {
    var filteredCars = availableCars.filter(function (order) {
      return order.price >= min_price && order.price <= max_price;
    });

    if (filteredCars.length > 0) {
      return res.status(200).json({
        status: 'success',
        data: filteredCars
      });
    }

    return res.status(404).json({
      status: 'error',
      message: 'Car not found'
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'Car not found'
  });
};

var deleteCar = function deleteCar(req, res) {
  var id = parseInt(req.params.id, 10);

  _cars["default"].find(function (car, index) {
    if (car.id === id) {
      _cars["default"].splice(index, 1);

      return res.status(200).json({
        success: 'true',
        message: 'Car has been deleted successfully',
        carModel: _cars["default"]
      });
    }

    return res.status(404).json({
      success: 'false',
      message: 'Car does not exist'
    });
  });
};

var getAllCars = function getAllCars(req, res) {
  if (_cars["default"].length === 0) {
    return res.status(200).json({
      status: 'false',
      message: 'No cars available'
    });
  }

  return res.status(200).json({
    status: 'true',
    message: 'Cars retrieved successfully',
    carModel: _cars["default"]
  });
};

var updateCarStatus = function updateCarStatus(req, res) {
  var id = req.params.id;

  var searchCar = _cars["default"].find(function (car) {
    return car.id === parseInt(id, 10);
  });

  if (!searchCar) {
    return res.status(404).json({
      status: 'false',
      message: 'car not found'
    });
  }

  if (searchCar.status === 'sold') {
    return res.status(400).json({
      status: 'false',
      message: 'car has already been sold'
    });
  }

  searchCar.status = 'sold';
  return res.status(404).json({
    status: 'true',
    message: 'car status successfully changed'
  });
};

var getSpecificBodytype = function getSpecificBodytype(req, res) {
  var body_type = req.params.body_type;
  var customcars = [];

  _cars["default"].find(function (car) {
    if (car.body_type === body_type) {
      customcars.push(car);
    }
  });

  if (customcars.length === 0) {
    return res.status(404).json({
      status: 'false',
      message: 'Car not Found'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Cars Successfully Retrieved',
    customcars: customcars
  });
};

var CarController = {
  createCar: createCar,
  getCar: getCar,
  getAllCars: getAllCars,
  deleteCar: deleteCar,
  updateCarStatus: updateCarStatus,
  carStatus: carStatus,
  priceRange: priceRange,
  getSpecificBodytype: getSpecificBodytype
};
var _default = CarController;
exports["default"] = _default;