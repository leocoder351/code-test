import IndexController from './IndexController.js';
import router from 'koa-simple-router';

const controllerInit = {
  getAllRouters(app, router) {
    app.use(router(_ => {
      _.get('/', IndexController.indexAction());
    }));
  }
};

export default controllerInit;