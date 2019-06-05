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
  id: 100,
  owner: 'Okoye Francis',
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  state: 'New',
  status: 'available',
  price: 3000000,
  manufacturer: 'Honda',
  model: 'Accord',
  body_type: 'Sedan'
};
var userdetails = {
  id: 13,
  email: 'ishola@gmail.com',
  first_name: 'Ishola',
  last_name: 'Daniel',
  password: 'qwerty1234',
  address: 'Gold street, Cliford way'
};
var API_PREFIX = '/api/v1';
var authToken;
describe('Create a Post', function () {
  before(function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send(userdetails).end(function (err, res) {
      authToken = res.body.token;
      done();
    });
  });
  it('/api/v1/car should respond with status code 201 and create a post', function (done) {
    _chai["default"].request(_app["default"]).post("".concat(API_PREFIX, "/car")).set('Accept', 'application/json').send(details).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.eql('Car Posted Successfully');
      done();
    });
  });
  it('/api/v1/car/:id should respond with status code 200 and get a single car', function (done) {
    var id = 100;

    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car/").concat(id)).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Car Successfully Retrieved');
      done();
    });
  });
  it('/api/v1/car?status=available should respond with status code 200 and get a single car', function (done) {
    _chai["default"].request(_app["default"]).get('/api/v1/car/?status=available').set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
  it('/api/v1/car should respond with status code 200', function (done) {
    var id = 100;

    _chai["default"].request(_app["default"])["delete"]("".concat(API_PREFIX, "/car/").concat(id)).set('x-access-token', authToken).send(details).end(function (err, res) {
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Car has been deleted successfully');
      done();
    });
  });
  it('/api/v1/order/:id/price should respond with status code 404 and and show order not found', function (done) {
    var id = 201;

    _chai["default"].request(_app["default"]).patch("/api/v1/order/".concat(id, "/price")).send({
      new_price_offered: 50000000
    }).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(404);
      done();
    });
  });
});