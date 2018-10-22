// 当用户登录后返回一个唯一标识 cookie

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));    // a=1&b=2
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname)));



// 跨站请求伪造 钓鱼网站
// 给一个吸引他的网站

app.listen(3001);