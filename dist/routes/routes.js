"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _cars = _interopRequireDefault(require("../controllers/cars"));

var _order = _interopRequireDefault(require("../controllers/order"));

var _user2 = _interopRequireDefault(require("../middleware/user"));

var _cars2 = _interopRequireDefault(require("../middleware/cars"));

var _order2 = _interopRequireDefault(require("../middleware/order"));

var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateSignin = _user2["default"].validateSignin,
    validateSignup = _user2["default"].validateSignup;
var verifyToken = _verifyToken["default"].verifyToken;
var validateNewPost = _cars2["default"].validateNewPost,
    validateUpdateStatus = _cars2["default"].validateUpdateStatus;
var validateCreateOrder = _order2["default"].validateCreateOrder,
    validateUpdateOrder = _order2["default"].validateUpdateOrder;
var createCar = _cars["default"].createCar,
    getCar = _cars["default"].getCar,
    getAllCars = _cars["default"].getAllCars,
    deleteCar = _cars["default"].deleteCar,
    updateCarStatus = _cars["default"].updateCarStatus;
var createOrder = _order["default"].createOrder,
    getOrder = _order["default"].getOrder,
    updateOrder = _order["default"].updateOrder;
var createUsers = _user["default"].createUsers;

var router = _express["default"].Router();

router.post('/auth/signup', validateSignup, createUsers);
router.post('/auth/signin', validateSignin, _user["default"].signIn);
router.post('/car', validateNewPost, createCar);
router.get('/car/:id', getCar); // router.get('/car?status=available', carStatus);

router.get('/car', getAllCars);
router["delete"]('/car/:id', verifyToken, deleteCar);
router.patch('/car/:id', verifyToken, validateUpdateStatus, updateCarStatus);
router.post('/order', verifyToken, validateCreateOrder, createOrder);
router.get('/order/:id', verifyToken, getOrder);
router.patch('/order/:id', verifyToken, validateUpdateOrder, updateOrder);
var _default = router;
exports["default"] = _default;