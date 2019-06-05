"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv["default"].config();

var secretHash = process.env.SECRET_KEY;

var VerifyToken =
/*#__PURE__*/
function () {
  function VerifyToken() {
    _classCallCheck(this, VerifyToken);
  }

  _createClass(VerifyToken, null, [{
    key: "verifyToken",
    value: function verifyToken(req, res, next) {
      var jwToken = req.headers.authorization || req.headers['x-access-token'];

      if (!jwToken) {
        return res.status(401).json({
          auth: false,
          message: 'Please provide a JWT token'
        });
      }

      _jsonwebtoken["default"].verify(jwToken, secretHash, function (err, authData) {
        if (err) {
          return res.status(401).json(err);
        }

        req.authData = authData;
        return next();
      });
    }
  }]);

  return VerifyToken;
}();

var _default = VerifyToken;
exports["default"] = _default;