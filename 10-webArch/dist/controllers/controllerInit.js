"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexController = require("./IndexController.js");

var _IndexController2 = _interopRequireDefault(_IndexController);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controllerInit = {
  getAllRouters(app, router) {
    app.use(router(_ => {
      _.get('/', _IndexController2.default.indexAction());
    }));
  }

};
exports.default = controllerInit;