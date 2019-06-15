"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  userTable: " CREATE TABLE IF NOT EXISTS users(\n      id SERIAL PRIMARY KEY,\n      first_name VARCHAR NOT NULL,\n      last_name VARCHAR UNIQUE NOT NULL,\n      email VARCHAR NOT NULL,\n      password VARCHAR NOT NULL,\n      address VARCHAR NOT NULL,\n      token VARCHAR NOT NULL,\n      is_admin BOOLEAN NOT NULL\n    )",
  carTable: "CREATE TABLE IF NOT EXISTS car(\n      id SERIAL PRIMARY KEY,\n      owner VARCHAR NOT NULL,\n      created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n      state VARCHAR NOT NULL,\n      status VARCHAR NOT NULL,\n      price NUMERIC NOT NULL,\n      manufacturer VARCHAR NOT NULL,\n      model VARCHAR NOT NULL,\n      body_type VARCHAR NOT NULL\n    )",
  orderTable: "CREATE TABLE IF NOT EXISTS orders(\n      id SERIAL PRIMARY KEY,\n      buyer VARCHAR NOT NULL,\n      car_id INTEGER REFERENCES car (id),\n      created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n      status VARCHAR NOT NULL,\n      price_offered NUMERIC NOT NULL\n    )"
};
exports["default"] = _default;