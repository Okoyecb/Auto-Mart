"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

/* eslint-disable consistent-return */
_dotenv["default"].config();

var secretHash = process.env.secret_key;

var VerifyToken =
/*#__PURE__*/
function () {
  function VerifyToken() {
    (0, _classCallCheck2["default"])(this, VerifyToken);
  }

  (0, _createClass2["default"])(VerifyToken, null, [{
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