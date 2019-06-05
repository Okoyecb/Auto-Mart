"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var validateNewPost = function validateNewPost(req, res, next) {
  try {
    if (req.body.price && req.body.owner && req.body.manufacturer && req.body.body_type && req.body.model) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Not Enough Details'
    });
  }
};

var validateUpdateStatus = function validateUpdateStatus(req, res, next) {
  try {
    if (Number(req.body.price) || req.body.status) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Details are missing'
    });
  }
}; // const validateDeleteCar = (req, res, next) => {
//   try {
//     if ((req.body.id) || req.body.status) {
//       next();
//     } else {
//       throw new Error();
//     }
//   } catch (err) {
//     res.status(412).json({
//       status: 412,
//       error: 'Details are missing',
//     });
//   }
// };


var carsValidator = {
  validateNewPost: validateNewPost,
  validateUpdateStatus: validateUpdateStatus
};
var _default = carsValidator;
exports["default"] = _default;