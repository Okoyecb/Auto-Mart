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


const CarController = {
  createCar,
};

export default CarController;
