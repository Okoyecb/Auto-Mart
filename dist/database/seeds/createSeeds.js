"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _moment = _interopRequireDefault(require("moment"));

var seedTable = {
  userTable: "INSERT INTO users(first_name, last_name, email, password, address, token)\n  VALUES ('James', 'Okoye', 'jamiecb@gmail.com','".concat(_bcrypt["default"].hashSync('ch2123', 10), "', 'No 80 Kolawole street', ''),\n  ('Chidi', 'Okoye', 'Okoyecb@gmail.com','").concat(_bcrypt["default"].hashSync('chi123', 10), "', 'No 30 Kolawole street', ''),\n  ('Rita', 'Okoye', 'Rita22@gmail.com','").concat(_bcrypt["default"].hashSync('chiii123', 10), "', 'No 70 Ishola street', ''),\n  ('Theresa', 'Okoye', 'ttre@gmail.com','").concat(_bcrypt["default"].hashSync('teresa21', 10), "', 'Bankole Avenue Osapa London', '')\n   "),
  carTable: "INSERT INTO car(owner, created_on, state, status, price, manufacturer, model, image, body_type)\n  VALUES ('1', to_date('".concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'New', 'available', '12200000', 'BMW', 'X6', '', 'SUV'),\n  ('2', to_date('").concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'Used', 'available', '23200000', 'Toyota', 'Corolla', '', 'Sedan'),\n  ('3', to_date('").concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'New', 'sold', '2200000', 'Honda', 'Accord', '', 'Sedan'),\n  ('4', to_date('").concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'New', 'available', '4200000', 'Volks', 'Passat', '', 'FWD')\n  "),
  orderTable: "INSERT INTO orders(buyer, car_id, created_on, status, price_offered, old_price_offered, new_price_offered)\n  VALUES ('3', '1', to_date('".concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'Pending', '1000000',  NULL, NULL),\n  ('2', '2', to_date('").concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'Pending', '3500000', NULL, NULL),\n  ('1', '3', to_date('").concat((0, _moment["default"])('2019-11-11').format('YYYY-MM-DD'), "', 'YYYY MM DD'), 'Sold', '1500000',  NULL, NULL)\n  ")
};
var _default = seedTable;
exports["default"] = _default;