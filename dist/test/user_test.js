"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

/* eslint-disable consistent-return */

/* eslint-disable no-undef */
var expect = _chai["default"].expect;

_chai["default"].use(_chaiHttp["default"]); // let token;

/* Test for get all users */


describe('Create New user', function () {
  it('it should create a new user', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signup').send({
      first_name: 'ttkie',
      last_name: 'YYlwa',
      email: 'rtty@gmail.com',
      password: '2388sswordy',
      address: 'Ade Street, Isolo'
    }).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      done();
    });
  });
  it('Signin A User', function (done) {
    _chai["default"].request(_app["default"]).post('/api/v1/auth/signin').send({
      email: 'jos824@gmail.com',
      password: 'passwordy'
    }).end(function (err, res) {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      done();
    });
  });
});