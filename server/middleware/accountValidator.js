/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
import bcrypt from 'bcrypt';
import Validator from '../helpers/routehelper';
import userModel from '../model/user';

class AccountValidator {
  static createAccountInputValidator(req, res, next) {
    const {
      username,
      email,
      password,
    } = req.body;

    const fields = {
      username,
      email,
      password,
    };
    const validator = new Validator();
    validator.validate(fields, 'required|string');

    if (validator.hasErrors) {
      return res.status(400).json({
        errorMessages: validator.getErrors(),
      });
    }
    return next();
  }

  static createAccountDuplicateValidator(req, res, next) {
    const {
      email,
      username,
    } = req.body;
    userModel.query(`SELECT email from users where email = '${email}'`)
      .then((foundEmail) => {
        userModel.query(`SELECT username from users where username = '${username}'`)
          .then((foundUsername) => {
            if (foundEmail.rowCount === 0 && foundUsername.rowCount === 0) {
              return next();
            }
            res.status(409).json({
              status: 409,
              message: 'Credentials already in use',
              error: true,
            });
          });
      }).catch(err => (
        res.status(500).json(err)
      ));
  }

  static loginAccountValidator(req, res, next) {
    const {
      email,
      password,
    } = req.body;

    const fields = {
      email,
      password,
    };
    const validator = new Validator();
    validator.validate(fields, 'required|string');

    if (validator.hasErrors) {
      return res.status(400).json({
        errorMessages: validator.getErrors(),
      });
    }
    userModel.query(`SELECT * FROM users Where email = '${email}' `)
      .then((user) => {
        if (user.rowCount > 0) {
          if (bcrypt.compareSync(password, user.rows[0].password) === false) {
            return res.status(401).json({
              status: 401,
              message: 'Wrong Password',
            });
          }
          req.user = user.rows[0];
          return next();
        }
        return res.status(404).json({
          status: 404,
          message: 'User does not exist',
          error: true,
        });
      }).catch(err => (
        res.status(500).json(err)
      ));
  }
}

export default AccountValidator;
