"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */

/* eslint-disable no-undef */
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
var details = {
  id: 1000,
  email: 'ooyecb@gmail.com',
  first_name: 'Michael',
  last_name: 'Smith',
  password: 'zxcvbbn',
  address: 'Ojota Avenue Osapa London'
};
describe('User Sign-up Test', function () {
  it('/api/v1/auth/signup should respond with status code 201 and create a User', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').set('Accept', 'application/json').send(details).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.eql('User successfully created');
      done();
    });
  });
  it('/api/v1/auth/signin should respond with status code 201 and create a User', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').set('Accept', 'application/json').send(details).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.eql('Login Succesful');
      done();
    });
  });
});