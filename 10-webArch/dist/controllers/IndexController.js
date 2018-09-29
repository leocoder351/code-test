"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const IndexController = {
  indexAction() {
    return (ctx, next) => {
      ctx.body = 'hello world';
    };
  }

};
exports.default = IndexController;