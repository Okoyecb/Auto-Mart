/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import carModel from '../model/cars';

const createCar = (req, res) => {
  const newCar = {
    id: 101,
    owner: req.body.owner,
    created_on: req.body.created_on,
    state: req.body.state,
    status: req.body.status,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    body_type: req.body.body_type,
  };

  carModel.push(newCar);
  return res.status(201).json({
    message: 'Car Posted Successfully',
    status: 201,
    data: newCar,
  });
};

const getCar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  carModel.map((cars) => {
    if (cars.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'Car retrieved successfully',
        cars,
      });
    }
  });
};

const carStatus = (req, res) => {
  const { status } = req.query;
  const filtered = carModel.filter(cars => cars.status === status);
  if (filtered.length > 0) {
    return res.status(200).send({
      success: 'true',
      message: 'Car retrieved successfully',
      filtered,
    });
  }
  return res.status(400).send({
    success: 'false',
  });
};

const priceRange = (req, res) => {
  const { status, min_price, max_price } = req.query;
  const filtered = carModel.filter(cars => cars.status === status);
  if (filtered.length > 0) {
    const filteredCars = filtered.filter(
      cars => cars.price >= min_price && cars.price <= max_price,
    );
    return res.status(200).send({
      success: 'true',
      message: 'Car retrieved successfully',
      filteredCars,
    });
  }
  return res.status(400).send({
    success: 'false',
  });
};


const deleteCar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  carModel.map((cars, index) => {
    if (cars.id === id) {
      carModel.splice(index, 1);
      return res.status(200).send({
        success: 'true',
        message: 'Car deleted successfuly',
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'Car does not exist',
  });
};


const getAllCars = (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    carStatus(req, res);
  }
  res.status(200).send({
    success: 'true',
    message: 'Cars retrieved successfully',
    carModel,
  });
};

const updateStatus = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let carFound;
  let itemIndex;
  carModel.map((cars, index) => {
    if (cars.id === id) {
      carFound = cars;
      itemIndex = index;
    }
  });

  if (!carFound) {
    return res.status(404).send({
      success: 'false',
      message: 'Car not found',
    });
  }


  const updatedStatus = {
    id: carFound.id,
    created_on: carFound.created_on,
    state: carFound.state,
    status: req.body.status || carFound.status,
    price: req.body.price || carFound.price,
    manufacturer: carFound.manufacturer,
    model: carFound.model,
    body_type: carFound.body_type,

  };

  carModel.splice(itemIndex, 1, updatedStatus);

  return res.status(201).send({
    success: 'true',
    message: 'Car Updated successfully',
    updatedStatus,
  });
};


const CarController = {
  createCar, getCar, getAllCars, deleteCar, updateStatus, carStatus, priceRange,
};

export default CarController;
