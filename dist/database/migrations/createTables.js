"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  userTable: " CREATE TABLE IF NOT EXISTS users(\n    id SERIAL PRIMARY KEY,\n    first_name VARCHAR NOT NULL,\n    last_name VARCHAR NOT NULL,\n    email VARCHAR NOT NULL UNIQUE,\n    password VARCHAR NOT NULL,\n    address VARCHAR NOT NULL,\n    token VARCHAR NOT NULL,\n    is_admin BOOLEAN DEFAULT false\n  )",
  carTable: "CREATE TABLE IF NOT EXISTS car(\n    id SERIAL PRIMARY KEY,\n    owner INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE, \n    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    state VARCHAR NOT NULL,\n    status VARCHAR NOT NULL,\n    price NUMERIC NOT NULL,\n    manufacturer VARCHAR NOT NULL,\n    model VARCHAR NOT NULL,\n    image VARCHAR,\n    body_type VARCHAR NOT NULL\n  )",
  orderTable: "CREATE TABLE IF NOT EXISTS orders(\n    id SERIAL PRIMARY KEY,\n    buyer INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,\n    car_id INTEGER REFERENCES car (id) ON DELETE CASCADE ON UPDATE CASCADE,\n    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    status VARCHAR DEFAULT 'Pending',\n    price_offered NUMERIC NOT NULL,\n    old_price_offered NUMERIC,\n    new_price_offered NUMERIC\n  )"
};
exports["default"] = _default;