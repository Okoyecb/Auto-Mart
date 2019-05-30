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
    message: 'Successfully retrieved single car',
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

  var filtered = _cars["default"].filter(function (cars) {
    return cars.status === status;
  });

  if (filtered.length > 0) {
    var filteredCars = filtered.filter(function (cars) {
      return cars.price >= min_price && cars.price <= max_price;
    });
    return res.status(200).send({
      success: 'true',
      message: 'Car retrieved successfully',
      filteredCars: filteredCars
    });
  }

  return res.status(400).send({
    success: 'false'
  });
};

var deleteCar = function deleteCar(req, res) {
  var id = parseInt(req.params.id, 10);

  _cars["default"].find(function (cars, index) {
    if (cars.id === id) {
      _cars["default"].splice(index, 1);

      return res.status(200).send({
        success: 'true',
        message: 'Car deleted successfully',
        data: _cars["default"]
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'Car does not exist'
  });
};

var getAllCars = function getAllCars(req, res) {
  if (Object.keys(req.query).length !== 0) {
    carStatus(req, res);
  }

  return res.status(200).send({
    success: 'true',
    message: 'Cars retrieved successfully',
    carModel: _cars["default"]
  });
};

var updateStatus = function updateStatus(req, res) {
  var id = parseInt(req.params.id, 10);
  var carFound;
  var itemIndex;

  _cars["default"].map(function (cars, index) {
    if (cars.id === id) {
      carFound = cars;
      itemIndex = index;
    }
  });

  if (!carFound) {
    return res.status(404).send({
      success: 'false',
      message: 'Car not found'
    });
  }

  var updatedStatus = {
    id: carFound.id,
    created_on: carFound.created_on,
    state: carFound.state,
    status: req.body.status || carFound.status,
    price: req.body.price || carFound.price,
    manufacturer: carFound.manufacturer,
    model: carFound.model,
    body_type: carFound.body_type
  };

  _cars["default"].splice(itemIndex, 1, updatedStatus);

  return res.status(201).send({
    success: 'true',
    message: 'Car Updated successfully',
    updatedStatus: updatedStatus
  });
};

var CarController = {
  createCar: createCar,
  getCar: getCar,
  getAllCars: getAllCars,
  deleteCar: deleteCar,
  updateStatus: updateStatus,
  carStatus: carStatus,
  priceRange: priceRange
};
var _default = CarController;
exports["default"] = _default;