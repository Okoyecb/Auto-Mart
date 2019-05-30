"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _order = _interopRequireDefault(require("../model/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */
var createOrder = function createOrder(req, res) {
  var newOrder = {
    id: 101,
    buyer: req.body.buyer,
    car_id: req.body.car_id,
    created_on: req.body.created_on,
    status: req.body.status,
    price: req.body.price,
    price_offered: req.body.price_offered
  };

  _order["default"].push(newOrder);

  return res.status(201).json({
    status: 201,
    message: 'Order created',
    data: newOrder
  });
};

var getOrder = function getOrder(req, res) {
  var id = parseInt(req.params.id, 10);

  _order["default"].map(function (order) {
    if (order.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'Order retrieved successfully',
        order: order
      });
    }
  });
};

var updateOrder = function updateOrder(req, res) {
  var id = parseInt(req.params.id, 10);
  var orderFound;
  var itemIndex;

  _order["default"].map(function (order, index) {
    if (order.id === id) {
      orderFound = order;
      itemIndex = index;
    }
  });

  if (!orderFound) {
    return res.status(404).send({
      success: 'false',
      message: 'Order not found'
    });
  }

  var updatedOrder = {
    id: orderFound.id,
    car_id: orderFound.car_id,
    status: orderFound.car_id,
    old_price_offered: orderFound.price_offered,
    new_price_offered: req.body.price_offered || orderFound.price_offered
  };

  _order["default"].splice(itemIndex, 1, updatedOrder);

  return res.status(201).send({
    success: 'true',
    message: 'Order Updated successfully',
    updatedOrder: updatedOrder
  });
};

var OrderController = {
  createOrder: createOrder,
  getOrder: getOrder,
  updateOrder: updateOrder
};
var _default = OrderController;
exports["default"] = _default;