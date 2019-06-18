/* eslint-disable max-len */
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
  const singleCar = carModel.find(car => car.id === id);
  if (!singleCar) {
    return res.status(404).json({
      status: 'success',
      message: 'Car not Found',
    });
  }
  return res.status(200).json({
    status: 'success',
    message: 'Car Successfully Retrieved',
    singleCar,
  });
};

const carStatus = (req, res) => {
  const {
    status,
  } = req.query;
  const filtered = carModel.filter(cars => cars.status === status);
  if (filtered.length > 0) {
    return res.status(200).send({
      success: 'true',
      message: 'Cars retrieved successfully',
      filtered,
    });
  }
  return res.status(400).send({
    success: 'false',
  });
};

const priceRange = (req, res) => {
  const {
    status,
    min_price,
    max_price,
  } = req.query;
  const availableCars = carModel.filter(order => order.status === status);
  if (availableCars.length > 0) {
    const filteredCars = availableCars.filter(
      order => order.price >= min_price && order.price <= max_price,
    );
    if (filteredCars.length > 0) {
      return res.status(200).json({
        status: 'success',
        data: filteredCars,
      });
    }
    return res.status(404).json({
      status: 'error',
      message: 'Car not found',
    });
  }
  return res.status(404).json({
    status: 'error',
    message: 'Car not found',
  });
};

const deleteCar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  carModel.find((car, index) => {
    if (car.id === id) {
      carModel.splice(index, 1);
      return res.status(200).json({
        success: 'true',
        message: 'Car has been deleted successfully',
        carModel,
      });
    }
    return res.status(404).json({
      success: 'false',
      message: 'Car does not exist',
    });
  });
};


// const getAllCars = (req, res) => {
//   if (carModel.length === 0) {
//     return res.status(200).json({
//       status: 'false',
//       message: 'No cars available',
//     });
//   }
//   return res.status(200).json({
//     status: 'true',
//     message: 'Cars retrieved successfully',
//     carModel,
//   });
// };


const updateCarStatus = (req, res) => {
  const { id } = req.params;
  const searchCar = carModel.find(car => car.id === parseInt(id, 10));
  if (!searchCar) {
    return res.status(404).json({
      status: 'false',
      message: 'car not found',
    });
  }
  if (searchCar.status === 'sold') {
    return res.status(400).json({
      status: 'false',
      message: 'car has already been sold',
    });
  }
  searchCar.status = 'sold';
  return res.status(404).json({
    status: 'true',
    message: 'car status successfully changed',
  });
};

const getSpecificBodytype = (req, res) => {
  const { body_type } = req.query;
  const customcars = [];
  carModel.find((car) => {
    if (car.body_type === body_type) {
      customcars.push(car);
    }
  });
  if (customcars.length === 0) {
    return res.status(404).json({
      status: 'false',
      message: 'Car not Found',
    });
  }
  return res.status(200).json({
    status: 'success',
    message: 'Cars Successfully Retrieved',
    customcars,
  });
};

const NewAvailableCars = (req, res) => {
  const AvailableCars = carModel.filter(car => car.status === 'available' && car.state === 'New');

  if (!AvailableCars) {
    res.status(404).json({
      status: 404,
      message: 'Cars not Found',
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'Cars retrieved successfully',
    data: AvailableCars,
  });
};

const UsedAvailableCars = (req, res) => {
  const AvailableusedCars = carModel.filter(car => car.status === 'available' && car.state === 'Used');

  if (!AvailableusedCars) {
    res.status(404).json({
      status: 404,
      message: 'Cars not Found',
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'Cars retrieved successfully',
    data: AvailableusedCars,
  });
};

const getAllCars = (req, res) => {
  if ('status' in req.query) {
    carStatus(req, res);
  } else if ('body_type' in req.query) {
    getSpecificBodytype(req, res);
  } else {
    return res.status(200).send({
      success: 'true',
      message: 'Cars retrieved successfully',
      carModel,
    });
  }
};

const CarController = {
  createCar,
  getCar,
  getAllCars,
  deleteCar,
  updateCarStatus,
  carStatus,
  priceRange,
  getSpecificBodytype,
  NewAvailableCars,
  UsedAvailableCars,
};

export default CarController;
