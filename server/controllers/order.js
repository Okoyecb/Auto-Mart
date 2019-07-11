/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import orderModel from '../model/order';

const createOrder = (req, res) => {
  const newOrder = {
    buyer: req.body.buyer,
    car_id: req.body.car_id,
    created_on: req.body.created_on,
    status: req.body.status,
    price: req.body.price,
    price_offered: req.body.price_offered,

  };

  orderModel.createOrder(newOrder);
  return res.status(201).json({
    status: 201,
    message: 'Order created',
    data: newOrder,
  });
};

const getOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  orderModel.getOrder(id).then((value) => {
    const result = value.rows;
    if (result.length > 0) {
      return res.status(200).json({
        success: 'true',
        message: 'Order retrieved successfully',
        data: result,
      });
    }
    return res.status(404).json({
      status: 'false',
      message: 'Order not Found',
    });
  });
};


const updateOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { price_offered } = req.body;
  orderModel.getOrder(id).then((result) => {
    const order = result.rows;
    if (order.length > 0) {
      const oldPrice = (order[0].new_price_offered === null ? order[0].price_offered : order[0].new_price_offered);
      orderModel.updateOrder(id, oldPrice, price_offered).then((results) => {
        const value = results.rows;
        return res.status(201).send({
          success: 'true',
          message: 'Order updated successfully',
          data: value,
        });
      });
    }
  });
};

const OrderController = {
  createOrder,
  getOrder,
  updateOrder,
};

export default OrderController;
