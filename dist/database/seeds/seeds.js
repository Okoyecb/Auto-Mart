"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createSeeds = _interopRequireDefault(require("./createSeeds"));

var _connections = _interopRequireDefault(require("../connections"));

var run =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('here');
            _context.prev = 1;
            _context.next = 4;
            return _connections["default"].query(_createSeeds["default"].userTable);

          case 4:
            _context.next = 6;
            return _connections["default"].query(_createSeeds["default"].carTable);

          case 6:
            _context.next = 8;
            return _connections["default"].query(_createSeeds["default"].orderTable);

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

var _default = run();

exports["default"] = _default;