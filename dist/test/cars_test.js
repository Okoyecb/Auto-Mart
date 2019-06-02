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
var updatedStatus = {
  id: 101,
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  state: 'New',
  status: 'sold',
  price: 3000000,
  manufacturer: 'Honda',
  model: 'Accord',
  body_type: 'Sedan'
};
var API_PREFIX = '/api/v1';
describe('Create a Post', function () {
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
      expect(res.body.message).to.eql('Successfully retrieved single car');
      done();
    });
  });
  it('/api/v1/car?status=available should respond with status code 200 and get a single car', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car?status=available")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Car retrieved successfully');
      done();
    });
  });
  it('/api/v1/car should respond with status code 201 and create a post', function (done) {
    var id = 101;

    _chai["default"].request(_app["default"])["delete"]("".concat(API_PREFIX, "/car/").concat(id)).set('Accept', 'application/json').send(details).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Car deleted successfully');
      done();
    });
  });
  it('/api/v1/car/:id should respond with status code 201 and update a car', function (done) {
    var id = 100;

    _chai["default"].request(_app["default"]).patch("".concat(API_PREFIX, "/car/").concat(id)).set('Accept', 'application/json').send(updatedStatus).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.eql('Car Updated successfully');
      done();
    });
  });
  it('/api/v1/car should respond with status code 200 and get a single car', function (done) {
    _chai["default"].request(_app["default"]).get("".concat(API_PREFIX, "/car")).set('Accept', 'application/json').end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.eql('Cars retrieved successfully');
      done();
    });
  });
});