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
  orderModel.map((order) => {
    if (order.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'Order retrieved successfully',
        order,
      });
    }
  });
};

const updateOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let orderFound;
  let itemIndex;
  orderModel.map((order, index) => {
    if (order.id === id) {
      orderFound = order;
      itemIndex = index;
    }
  });

  if (!orderFound) {
    return res.status(404).send({
      success: 'false',
      message: 'Order not found',
    });
  }


  const updatedOrder = {
    id: orderFound.id,
    car_id: orderFound.car_id,
    status: orderFound.car_id,
    old_price_offered: orderFound.price_offered,
    new_price_offered: req.body.price_offered || orderFound.price_offered,
  };

  orderModel.splice(itemIndex, 1, updatedOrder);

  return res.status(201).send({
    success: 'true',
    message: 'Order Updated successfully',
    updatedOrder,
  });
};

const OrderController = {
  createOrder, getOrder, updateOrder,
};

export default OrderController;
