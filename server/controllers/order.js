import orderModel from '../model/order';

const createOrder = (req, res) => {
  const newOrder = {
    id: 101,
    buyer: req.body.buyer,
    car_id: req.body.car_id,
    created_on: req.body.created_on,
    status: req.body.status,
    price: req.body.price,
    price_offered: req.body.price_offered,

  };

  orderModel.push(newOrder);
  return res.status(201).json({
    status: 201,
    data: newOrder,
  });
};


const OrderController = {
  createOrder,
};

export default OrderController;
