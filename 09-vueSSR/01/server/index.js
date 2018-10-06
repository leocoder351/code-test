const path = require('path');
const fs = require('fs');
const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(path.resolve(__dirname, 'index.template.html'), 'utf-8')
});

server.get('*', (req, res) => {
  const context = {
    title: 'hello',
    meta: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `
  };

  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  });

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return ;
    }

    console.log('html', html);

    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    res.end(`${html}`);
  })
});

server.listen(8080);