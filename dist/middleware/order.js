"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var validateCreateOrder = function validateCreateOrder(req, res, next) {
  try {
    req.body.status = req.body.status ? req.body.status : 'Pending';

    if (req.body.buyer && req.body.price && req.body.price_offered) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Please enter the required details'
    });
  }
};

var validateUpdateOrder = function validateUpdateOrder(req, res, next) {
  try {
    if (req.body.price_offered) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Please Enter Your New Offer'
    });
  }
};

var orderValidator = {
  validateCreateOrder: validateCreateOrder,
  validateUpdateOrder: validateUpdateOrder
};
var _default = orderValidator;
exports["default"] = _default;