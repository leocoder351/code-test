"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview 实现Test数据模型
 * @author sunny@yidengxuetang.com
 */

/**
 * TestService ，生成一段异步的数据
 * @class
 */
let TestService = class TestService {
  /**
   * @constructor 
   * @param {string} app Test docs文档
   * */
  constructor(app) {}
  /**
   * 获取数据的 TestService API
   * @returns {Promise} 返回异步的处理结果
   * @example
   * return new Promise
   * getData
   */
  getQQ() {
    return 1;
  }
};
exports.default = TestService;