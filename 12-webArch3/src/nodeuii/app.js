import Koa from "koa";
import config from "./config";
import log4js from 'log4js';
import errorHandler from './middwares/errorHandler';
import path from 'path';
import serve from 'koa-static';
import render from 'koa-swig';
import co from 'co';
import { createContainer, asClass, asValue } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';

// IOC 控制反转容器
const container = createContainer();

const app = new Koa();

// 每一次请求 new 
app.use(scopePerRequest(container));

// 装载所有的 services 到 controller
container.loadModules([path.resolve(__dirname, 'services/*.js')], {
  formatName: 'camelCase'
})


// const config = configure(app);

app.context.render = co.wrap(render({
  root: path.resolve(__dirname, config.viewDir),
  autoescape: true,
  varControls: ["[[", "]]"],
  cache: 'memory',
  ext: 'html'
}));

log4js.configure({
  appenders: { cheese: { type: 'file', filename: path.resolve(__dirname, 'logs/yd.log')} },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');

// 错误处理中心
errorHandler.error(app, logger);
// load 所有路由
app.use(loadControllers(path.resolve(__dirname, 'controllers/*.js'), { cwd: __dirname }));

app.use(serve(config.staticDir));

app.listen(config.port,()=>{
  logger.error('cheese is to ripe');
  console.log(`yd-web listening on ${config.port}`);
});