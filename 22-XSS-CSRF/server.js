// 当用户登录后返回一个唯一标识 cookie

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let svgCaptcha = require('svg-captcha');
let app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));    // a=1&b=2
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname)));

let userList = [
  {
    username: 'wang',
    password: 123,
    money: 20
  },
  {
    username: 'liu',
    password: 456,
    money: 1000
  }
];

let SESSION_ID = 'connect.sid';
let session = {};

app.post('/api/login', (req, res) => {
  let {username, password} = req.body;

  let user = userList.find(user => {
    return user.username.toString() === username && user.password.toString() === password;
  });

  if (user) {
    // 服务器需要在用户登录后 给一个信息
    let cardId = Math.random() + Date.now();

    session[cardId] = {user};
    res.cookie(SESSION_ID, cardId, {httpOnly: false});
    res.json({
      code: 0
    });
  } else {
    res.json({
      code: -1,
      error: '用户不存在'
    });
  }
});

// 反射型 http://localhost:3000/welcome?type=<script>alert(document.cookie)</script>
// chrome 发现路径存在异常 会有xss屏蔽功能
// 一般情况下会让cookie在前端不可获取httpOnly设为true 并不是解决XSS的方案 只是降低受损范围
// 诱导用户自己点开（一次性的） 
// 查询参数 可以加上encodeURIComponent()
// encodeURIComponent会把 http://  编码成  http%3A%2F%2F 而encodeURI却不会
// 所以，encodeURI()对URL进行转义，encodeURIComponent()对参数进行转义
app.get('/welcome', (req, res) => {
  res.send(`${encodeURIComponent(req.query.type)}`);
});

let comments = [
  {
    username: 'wang',
    content: '你好啊'
  },
  {
    username: 'liu',
    content: '今天天气不错'
  }
];

app.get('/api/list', (req, res) => {
  res.json({
    code: 0,
    comments
  });
});

// xss 持久型 恶意的脚本存储到服务器上 所有人访问时都会造成攻击 比反射型和DOM-Based 范围更大
app.post('/api/addComment', (req, res) => {
  // 当你访问添加留言时 就执行到这里了
  let result = session[req.cookies[SESSION_ID]] || {};    // {user: {username: '', password: ''}}
  let user = result.user;
  let content = req.body.content;

  if (user) {
    comments.push({username: user.username, content: content});
    res.json({code: 0});
  } else {
    res.json({
      code: -1,
      error: '用户未登录'
    });
  }
});

app.get('/api/userinfo', (req, res) => {
  let result = session[req.cookies[SESSION_ID]] || {};
  // data表示的是svg内容 text表示的是验证码对应的结果
  let {data, text} = svgCaptcha.create();
  result.text = text;   // 下次请求时拿到的返回结果和上次存好的验证码做对比
  let user = result.user;

  if (user) {
    res.json({
      code: 0,
      user: {
        username: user.username,
        money: user.money,
        svg: data
      }
    })
  } else {
    res.json({
      code: -1,
      error: '用户未登录'
    });
  }
});

app.post('/api/transfer', (req, res) => {
  let result = session[req.cookies[SESSION_ID]] || {};
  let user = result.user;
  // 可以通过node自己发请求实现伪造
  let referer = req.headers['referer'] || '';
  if (referer.includes('http://localhost:3000')) {
    if (user) {
      let {target, money, code, token} = req.body;

      if ('my_' + req.cookies[SESSION_ID] === token) {
        money = Number(money);
  
        if (code && code === result.text) {
          // 如果有验证码 并且和我给你的验证码一致
          userList.forEach(u => {
            if (u.username.toString() === user.username) {
              u.money -= money;
            }
            if (u.username.toString() === target) {
              u.money += money;
            }
          });
          res.json({
            code: 0
          })
        } else {
          res.json({
            code: -2,
            error: '验证码不存在'
          });
        }
      } else {
        res.json({
          code: -4,
          error: '没有token'
        });
      }
    } else {
      res.json({
        code: -1,
        error: '用户未登录'
      });
    }
  } else {
    res.json({
      code: -3,
      error: 'referer来源错误'
    });
  }
});

// xss + csrf = xsrf
// 跨站请求伪造 钓鱼网站
// 给一个吸引他的网站

app.listen(3000);