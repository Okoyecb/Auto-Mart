const validateNewPost = (req, res, next) => {
  try {
    if ((req.body.price) && (req.body.owner) && req.body.manufacturer
          && req.body.body_type && req.body.model) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Not Enough Details',
    });
  }
};

const validateUpdateStatus = (req, res, next) => {
  try {
    if (Number(req.body.price) || req.body.status) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Details are missing',
    });
  }
};

// const validateDeleteCar = (req, res, next) => {
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


const carsValidator = {
  validateNewPost, validateUpdateStatus,
};

export default carsValidator;
