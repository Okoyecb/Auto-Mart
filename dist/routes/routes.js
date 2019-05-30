"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _cars = _interopRequireDefault(require("../controllers/cars"));

var _order = _interopRequireDefault(require("../controllers/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/auth/signup', _user["default"].createUsers);
router.post('/auth/signin', _user["default"].signIn);
router.post('/car', _cars["default"].createCar);
router.get('/car/:id', _cars["default"].getCar);
router.get('/car?status=available&min_price=​XXXValue​&max_price=​XXXValue', _cars["default"].priceRange);
router.get('/car', _cars["default"].getAllCars);
router["delete"]('/car/:id', _cars["default"].deleteCar);
router.patch('/car/:id', _cars["default"].updateStatus);
router.post('/order', _order["default"].createOrder);
router.get('/order/:id', _order["default"].getOrder);
router.patch('/order/:id', _order["default"].updateOrder);
var _default = router;
exports["default"] = _default;