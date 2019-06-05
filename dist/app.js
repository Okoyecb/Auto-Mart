"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/no-extraneous-dependencies */
_dotenv["default"].config();

var app = (0, _express["default"])();
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json('Hi there! Welcome to our AutoMart API');
});
app.use('/api/v1', _routes["default"]);
app.use('*', function (req, res) {
  return res.status(404).json({
    success: false,
    message: 'Page not Found'
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('Welcome to AutoMart');
});
var _default = app;
exports["default"] = _default;