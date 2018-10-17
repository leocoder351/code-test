const http = require('http');
const EventEmitter = require('events');
let context = require('./context');
let request = require('./request');
let response = require('./response');

class Koa extends EventEmitter {
  constructor () {
    super();
    this.fn = null;
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use (fn) {
    this.fn = fn;   // 用户使用use方法时，回调赋值给this.fn
  }

  createContext (req, res) {    // 这是核心，创建ctx
    // 使用Object.create方法是为了继承this.context，但在增加属性时不影响原对象
    const ctx = Object.create(this.context);
    const request = ctx.request = Object.create(this.request);
    const response = ctx.response = Object.create(this.response);

    // 重点
    ctx.req = request.req = response.req = req;
    ctx.res = request.res = response.res = res;
    request.ctx = response.ctx = ctx;
    request.response = response;
    response.request = request;

    return ctx;
  }

  handleRequest (req, res) {    // 创建一个处理请求的函数
    let ctx = this.createContext(req, res);   // 创建
    this.fn(ctx);   // 调用用户给的回调，把ctx还给用户使用
    res.end(ctx.body);    // ctx.body 用来输出到页面
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this));    // 使用bind，防止this丢失
    server.listen(...args);   // 因为listen方法可能有很多参数，这里直接解构所有参数就可以了
  }
}

module.exports = Koa;