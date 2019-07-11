"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_cloudinary["default"].config({
  cloud_name: 'okoyecb',
  api_key: 874837483274837,
  api_secret: 'a676b67565c6767a6767d6767f676fe1'
});

var uploads = function uploads(file) {
  return new Promise(function (resolve) {
    _cloudinary["default"].uploader.upload(file, function (result) {
      resolve({
        url: result.url,
        id: result.public_id
      });
    }, {
      resource_type: 'auto'
    });
  });
};

var _default = uploads;
exports["default"] = _default;