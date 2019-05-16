const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(serve(path.resolve(__dirname, 'client')));
app.use(serve(path.resolve(__dirname, 'node_modules')));

app.listen(3000, () => {
  console.log('Server start at port 3000');
});