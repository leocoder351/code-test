import Koa from "koa";
import controllerInit from "./controllers/controllerInit.js";
import  router  from 'koa-simple-router';
import config from "./config";
const app = new Koa();
// const config = configure(app);
controllerInit.getAllrouters(app,router);
app.listen(config.port,()=>{
 console.log(`yd-web listening on ${config.port}`);
});