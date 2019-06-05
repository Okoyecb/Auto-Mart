/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
    message: 'Order created',
    data: newOrder,
  });
};

const getOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const retrievedOrder = orderModel.find(order => order.id === id);
  return res.status(200).send({
    success: 'true',
    message: 'Order retrieved successfully',
    retrievedOrder,
  });
};

const updateOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const seenOrder = orderModel.find(order => order.id === id);
  if (!seenOrder) {
    return res.status(404).send({
      success: 'false',
      message: 'Order Not Found',
    });
  }

  seenOrder.old_offer = seenOrder.current_offer;
  seenOrder.current_offer = req.body.price_offered;

  return res.status(201).send({
    success: 'true',
    message: 'Order updated successfully',
    seenOrder,
  });
};
const OrderController = {
  createOrder,
  getOrder,
  updateOrder,
};

export default OrderController;
