"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var connectionString;

if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.DB_TEST_URL;
} else if (process.env.NODE_ENV === 'development') {
  connectionString = process.env.DB_URL;
} else {
  connectionString = process.env.DATABASE_URL;
}

var pool = new _pg.Pool({
  connectionString: connectionString
}); // const pool = new Pool();

var _default = {
  query: function query(queries) {
    return new Promise(function (resolve, reject) {
      pool.query(queries).then(function (res) {
        resolve(res);
      }, function (err) {
        reject(err);
      });
    });
  }
};
exports["default"] = _default;