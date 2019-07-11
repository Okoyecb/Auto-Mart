"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

require("chai/register-should");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

var _cars = require("./dummyData/cars");

/* eslint-disable consistent-return */

/* eslint-disable no-undef */
var details = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
var API_PREFIX = '/api/v1';
var authToken;

_chai["default"].use(_chaiHttp["default"]);

var should = _chai["default"].should,
    expect = _chai["default"].expect;
should();
describe('/GET /api/v1/car', function () {
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
  it('it should get all cars whether sold or unsold', function (done) {
    _chai["default"].request(_app["default"]).get('/api/v1/car').send(_cars.validAd).end(function (err, res) {
      expect(res).to.have.status(200);
      res.body.should.have.property('message');
      done();
    });
  });
  it('it should get a single car', function (done) {
    var id = 3;

    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car/").concat(id)).set('x-access-token', "Bearer ".concat(authToken)).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Car retrieved successfully');
      done();
    });
  });
  it('/api/v1/car should Delete Car', function (done) {
    console.log('ghgyhgh', authToken);
    var id = 1;

    _chai["default"].request(_app["default"])["delete"]("".concat(API_PREFIX, "/car/").concat(id)).set('x-access-token', "Bearer ".concat(authToken)).send(details).end(function (err, res) {
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Car deleted successfully');
      done();
    });
  });
  it('/api/v1/car?body_type=Sedan should respond with status code 200', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car?body_type=Sedan")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
  it('/api/v1/car?status=available&manufacturer=Honda should respond with status code 200', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car?status=available&manufacturer=Honda")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
  it('/api/v1/car?status=available should respond with status code 200', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car?status=available")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
  it('/api/v1/car?status=sold should respond with status code 200', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car?status=sold")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.eql(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
});