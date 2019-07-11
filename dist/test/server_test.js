"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

/* eslint-disable no-undef */
// config chai to use expect
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('AutoMart Server', function () {
  it('should respond with status code 200', function (done) {
    _chai["default"].request(_app["default"]).get('/').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body).to.eql('Hi there! Welcome to our AutoMart API');
      done();
    });
  });
});