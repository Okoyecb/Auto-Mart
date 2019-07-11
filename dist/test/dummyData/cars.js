"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noPrice = exports.nonStringBodyType = exports.undefinedBodyType = exports.nonStringStatus = exports.undefinedStatus = exports.nonStringState = exports.undefinedState = exports.nonFloatPrice = exports.undefinedPrice = exports.nonStringModel = exports.undefinedModel = exports.nonStringManufacturer = exports.emptyManufacturer = exports.undefinedManufacturer = exports.validAd = void 0;
var validAd = {
  // id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.validAd = validAd;
var undefinedManufacturer = {
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.undefinedManufacturer = undefinedManufacturer;
var emptyManufacturer = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: '',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.emptyManufacturer = emptyManufacturer;
var nonStringManufacturer = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: ['Ford'],
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.nonStringManufacturer = nonStringManufacturer;
var undefinedModel = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.undefinedModel = undefinedModel;
var nonStringModel = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: ['2009'],
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.nonStringModel = nonStringModel;
var undefinedPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.undefinedPrice = undefinedPrice;
var noPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: '',
  state: 'new',
  status: 'sold',
  body_type: 'truck'
};
exports.noPrice = noPrice;
var nonFloatPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: '150000.00',
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.nonFloatPrice = nonFloatPrice;
var undefinedState = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.undefinedState = undefinedState;
var nonStringState = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: ['new'],
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.nonStringState = nonStringState;
var undefinedStatus = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.undefinedStatus = undefinedStatus;
var nonStringStatus = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: ['sold'],
  body_type: 'truck',
  imageUrl: 'http://www.image.com'
};
exports.nonStringStatus = nonStringStatus;
var undefinedBodyType = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  imageUrl: 'http://www.image.com'
};
exports.undefinedBodyType = undefinedBodyType;
var nonStringBodyType = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: ['truck'],
  imageUrl: 'http://www.image.com'
};
exports.nonStringBodyType = nonStringBodyType;