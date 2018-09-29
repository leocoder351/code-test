import Koa from 'koa';
import router from 'koa-simple-router';
import configure from './config';
import controllerInit from './controllers/controllerInit.js';

const app = new Koa();
const config = configure(app);

controllerInit.getAllRouters(app, router);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`)
});
