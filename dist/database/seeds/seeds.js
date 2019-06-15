"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _connections = _interopRequireDefault(require("../connections"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  run: function run() {
    (0, _connections["default"])();
  }
};
exports["default"] = _default;