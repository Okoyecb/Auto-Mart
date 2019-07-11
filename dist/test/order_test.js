"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

/* eslint-disable consistent-return */

/* eslint-disable no-undef */
var details = {
  id: 200,
  buyer: 1,
  car_id: 3,
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  status: 'Pending',
  price: 4000000,
  price_offered: 38000000
};

_chai["default"].use(_chaiHttp["default"]);

var should = _chai["default"].should,
    expect = _chai["default"].expect;
should();
var API_PREFIX = '/api/v1';
var authToken;
describe('/GET /api/v1/order', function () {
  before(function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: 'Okoyecb@gmail.com',
      password: 'chi123'
    }).end(function (err, res) {
      authToken = res.body.token;
      console.log(res.body);
      done();
    });
  });
  it('/api/v1/order should respond with status code 201 and create an order', function (done) {
    _chai["default"].request(_app["default"]).post("".concat(API_PREFIX, "/order")).set('x-access-token', authToken).send(details).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.eql('Order created');
      done();
    });
  });
  it('/api/v1/order/:id should respond with status code 200 and retrieve an order', function (done) {
    var id = 10;

    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/order/").concat(id)).set('x-access-token', authToken).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Order retrieved successfully');
      done();
    });
  });
  it('/api/v1/order/:id/price should respond with status code 404 and and show order not found', function (done) {
    var id = 10;

    _chai["default"].request(_app["default"]).patch("".concat(API_PREFIX, "/order/").concat(id, "/price")).send({
      new_price_offered: 50000000
    }).set('x-access-token', authToken).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(404);
      done();
    });
  });
});