"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  userTable: " CREATE TABLE IF NOT EXISTS users(\n    id SERIAL PRIMARY KEY,\n    first_name VARCHAR NOT NULL,\n    last_name VARCHAR UNIQUE NOT NULL,\n    email VARCHAR NOT NULL,\n    password VARCHAR NOT NULL,\n    address VARCHAR NOT NULL,\n    token VARCHAR NOT NULL,\n    is_admin BOOLEAN NOT NULL,\n  )"
};
exports["default"] = _default;