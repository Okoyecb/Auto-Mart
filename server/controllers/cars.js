/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import carModel from '../model/cars';

const createCar = (req, res) => {
  const newCar = {
    owner: req.body.owner,
    created_on: req.body.created_on,
    state: req.body.state,
    status: req.body.status,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    image: req.body.image,
    body_type: req.body.body_type,
  };

  carModel.createCar(newCar);
  return res.status(201).json({
    message: 'Car Posted Successfully',
    status: 201,
    data: newCar,
  });
};

const getCar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  carModel.getCar(id).then((value) => {
    const result = value.rows;
    if (result.length > 0) {
      return res.status(200).json({
        status: 'true',
        message: 'Car retrieved successfully',
        data: result,
      });
    }
    return res.status(404).json({
      status: 'false',
      message: 'Car not Found',
    });
  });
};

const carStatus = (req, res) => {
  const { status } = req.query;
  carModel.carStatus(status).then((values) => {
    if (values.rows.length > 0) {
      const result = values.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result,
      });
    }
    return res.status(400).send({
      success: 'Cars not Found',
    });
  });
};

const priceRange = (req, res) => {
  const { min_price, max_price } = req.query;
  carModel.priceRange(min_price, max_price).then((values) => {
    if (values.rows.length > 0) {
      const result = values.rows;
      return res.status(200).send({
        success: 'Success',
        message: 'Cars Retrieved Successfully',
        data: result,
      });
    }
    return res.status(404).send({
      success: 'Failed',
      message: 'Cars not Found',
    });
  });
};

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await carModel.deleteCar(id);
    return res.status(200).json({
      success: 'true',
      message: 'Car deleted successfully',
    });
  } catch (error) {
    return res.status(404).json({
      success: 'false',
      message: 'Car not deleted successfully',
    });
  }
};

const updateCarStatus = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { status } = req.body;
  carModel.getCar(id).then((values) => {
    const singleCar = values.rows;
    if (singleCar.length > 0) {
      carModel.updateCarStatus(id, status).then((value) => {
        const result = value.rows;
        return res.status(200).json({
          status: 'Success',
          message: 'Car Status Updated Successfully',
          result,
        });
      }).catch(error => res.status(400).json({
        status: 400,
        error: error.message,
      }));
    } else {
      res.status(404).json({
        status: 'False',
        error: 'Car not found',
      });
    }
  });
};

const getSpecificBodytype = (req, res) => {
  const { body_type } = req.query;
  carModel.getSpecificBodytype(body_type).then((values) => {
    if (values.rows.length > 0) {
      const result = values.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result,
      });
    }
    return res.status(404).send({
      success: 'Cars not Found',
    });
  });
};

const carStatusAndState = (req, res) => {
  const { status, state } = req.query;
  carModel.carStatusAndState(status, state).then((values) => {
    if (values.rows.length > 0) {
      const result = values.rows;
      return res.status(200).json({
        status: 200,
        message: 'Cars retrieved successfully',
        data: result,
      });
    }
    return res.status(404).json({
      message: 'Cars not Found',
    });
  });
};

const availableAndManufacturer = (req, res) => {
  const { status, manufacturer } = req.query;
  carModel.availableAndManufacturer(status, manufacturer).then((values) => {
    if (values.rows.length > 0) {
      const result = values.rows;
      return res.status(200).json({
        status: 200,
        message: 'Cars retrieved successfully',
        data: result,
      });
    }
    return res.status(404).send({
      success: 'Cars not Found',
    });
  });
};

const getAllCars = (req, res) => {
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
    carModel.getAllCars().then((value) => {
      const result = value.rows;
      return res.status(200).send({
        success: 'true',
        message: 'Cars retrieved successfully',
        data: result,
      });
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
  carStatusAndState,
  availableAndManufacturer,
};

export default CarController;
