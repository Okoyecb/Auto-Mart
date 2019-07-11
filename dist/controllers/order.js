"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _order = _interopRequireDefault(require("../model/order"));

/* eslint-disable camelcase */

/* eslint-disable max-len */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */
var createOrder = function createOrder(req, res) {
  var newOrder = {
    buyer: req.body.buyer,
    car_id: req.body.car_id,
    created_on: req.body.created_on,
    status: req.body.status,
    price: req.body.price,
    price_offered: req.body.price_offered
  };

  _order["default"].createOrder(newOrder);

  return res.status(201).json({
    status: 201,
    message: 'Order created',
    data: newOrder
  });
};

var getOrder = function getOrder(req, res) {
  var id = parseInt(req.params.id, 10);

  _order["default"].getOrder(id).then(function (value) {
    var result = value.rows;

    if (result.length > 0) {
      return res.status(200).json({
        success: 'true',
        message: 'Order retrieved successfully',
        data: result
      });
    }

    return res.status(404).json({
      status: 'false',
      message: 'Order not Found'
    });
  });
};

var updateOrder = function updateOrder(req, res) {
  var id = parseInt(req.params.id, 10);
  var price_offered = req.body.price_offered;

  _order["default"].getOrder(id).then(function (result) {
    var order = result.rows;

    if (order.length > 0) {
      var oldPrice = order[0].new_price_offered === null ? order[0].price_offered : order[0].new_price_offered;

      _order["default"].updateOrder(id, oldPrice, price_offered).then(function (results) {
        var value = results.rows;
        return res.status(201).send({
          success: 'true',
          message: 'Order updated successfully',
          data: value
        });
      });
    }
  });
};

var OrderController = {
  createOrder: createOrder,
  getOrder: getOrder,
  updateOrder: updateOrder
};
var _default = OrderController;
exports["default"] = _default;