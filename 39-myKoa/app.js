const YdKoa = require('./lib/application');

const app = new YdKoa();

app.use(async (ctx, next) => {
  console.log('入口1');
  await next();
  console.log('出口2');
});

app.use(async (ctx, next) => {
  console.log('入口2');
  await next();
  console.log('出口1');
});

app.listen(3000, () => {
  console.log('Server start on 3000 port');
});