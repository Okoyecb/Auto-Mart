"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _cars = _interopRequireDefault(require("../controllers/cars"));

var _order = _interopRequireDefault(require("../controllers/order"));

var _user2 = _interopRequireDefault(require("../validator/user"));

var _cars2 = _interopRequireDefault(require("../validator/cars"));

var _order2 = _interopRequireDefault(require("../validator/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateSignin = _user2["default"].validateSignin,
    validateSignup = _user2["default"].validateSignup;
var validateNewPost = _cars2["default"].validateNewPost,
    validateUpdateStatus = _cars2["default"].validateUpdateStatus;
var validateCreateOrder = _order2["default"].validateCreateOrder,
    validateUpdateOrder = _order2["default"].validateUpdateOrder;

var router = _express["default"].Router();

router.post('/auth/signup', validateSignup, _user["default"].createUsers);
router.post('/auth/signin', validateSignin, _user["default"].signIn);
router.post('/car', validateNewPost, _cars["default"].createCar);
router.get('/car/:id', _cars["default"].getCar);
router.get('/car?status=available&min_price=​XXXValue​&max_price=​XXXValue', _cars["default"].priceRange);
router.get('/car', _cars["default"].getAllCars);
router["delete"]('/car/:id', _cars["default"].deleteCar);
router.patch('/car/:id', validateUpdateStatus, _cars["default"].updateStatus);
router.post('/order', validateCreateOrder, _order["default"].createOrder);
router.get('/order/:id', _order["default"].getOrder);
router.patch('/order/:id', validateUpdateOrder, _order["default"].updateOrder);
var _default = router;
exports["default"] = _default;