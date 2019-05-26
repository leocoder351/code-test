const EventEmitter = require('events');
const http = require('http');

class Application extends EventEmitter {
  constructor() {
    super();
    // 存储所有的中间件
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }

  compose() {
    console.log(this.middlewares);
    // 将所有的middleware进行递归合并
    return async ctx => {
      function createNext(middleware, oldNext) {
        return async () => {
          await middleware(ctx, oldNext);
        }
      }
      let len = this.middlewares.length;
      let next = async () => {
        return Promise.resolve();
      }
      for (let i=len-1; i>=0; i--) {
        let currentMiddleware = this.middlewares[i];
        next = createNext(currentMiddleware, next);
      }
      await next();
    }
  }

  onerror(err) {
    this.emit('error', err);
  }

  // 最终要输出的内容
  callback() {
    return (req, res) => {
      let fn = this.compose();
      const ctx = {};
      const onerror = this.onerror;
      return fn(ctx).then(() => {
        res.end('hello world');
      }).catch(onerror);
    }
  }
}

module.exports = Application;