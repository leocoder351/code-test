import Koa from "koa";
import controllerInit from "./controllers/controllerInit.js";
import router  from 'koa-simple-router';
import config from "./config";
import log4js from 'log4js';
import errorHandler from './middwares/errorHandler';
import path from 'path';
import serve from 'koa-static';
import render from 'koa-swig';
import co from 'co';

const app = new Koa();
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

// 集中处理所有路由
controllerInit.getAllrouters(app,router);

app.use(serve(config.staticDir));

app.listen(config.port,()=>{
  logger.error('cheese is to ripe');
  console.log(`yd-web listening on ${config.port}`);
});