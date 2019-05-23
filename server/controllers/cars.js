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


const getAllCars = (req, res) => res.status(200).send({
  success: 'true',
  message: 'Cars retrieved successfully',
  carModel,
});


const CarController = {
  createCar, getCar, getAllCars, deleteCar,
};

export default CarController;
