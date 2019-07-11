
const validateCreateOrder = (req, res, next) => {
  try {
    req.body.status = (req.body.status) ? req.body.status : 'Pending';
    if (req.body.buyer && req.body.price_offered) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Please enter the required details',
    });
  }
};

const validateUpdateOrder = (req, res, next) => {
  try {
    if (req.body.price_offered) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Please Enter Your New Offer',
    });
  }
};

const orderValidator = {
  validateCreateOrder, validateUpdateOrder,
};

export default orderValidator;
