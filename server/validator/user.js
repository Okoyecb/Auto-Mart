/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
const nameregex = /^[A-Za-z ]{3,}$/;
const emailregex = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const passwordregex = /^\S{6,}$/;


const validateSignin = (req, res, next) => {
  try {
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();
    if ((emailregex.test(req.body.email) || emailregex.test(req.body.email))
            && passwordregex.test(req.body.password)) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Email or Password is Invalid',
    });
  }
};


const validateSignup = (req, res, next) => {
  try {
    req.body.first_name = req.body.first_name.trim();
    req.body.last_name = req.body.last_name.trim();
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();
    if (emailregex.test(req.body.email) && passwordregex.test(req.body.password) && nameregex.test(req.body.first_name)
            && nameregex.test(req.body.last_name)) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(412).json({
      status: 412,
      error: 'Required Details are not Valid',
    });
  }
};

const userValidator = {
  validateSignup, validateSignin,
};

export default userValidator;
