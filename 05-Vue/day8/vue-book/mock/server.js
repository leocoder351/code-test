let http = require('http');
let path = require('path');
let fs = require('fs');
let url = require('url');

// 获取轮播图 /sliders
let sliders = require('./sliders');

function readBooksPromise() {
  return new Promise((resolve, reject) => {
    let readPath = path.resolve(__dirname, './book.json');

    fs.readFile(readPath, 'utf-8', (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
}

function writeBooksPromise(content) {
  let writePath = path.resolve(__dirname, './book.json');

  return new Promise((resolve, reject) => {
    fs.writeFile(writePath, JSON.stringify(content), (err, data) => {
      if (err) return reject(err);
      console.log(data);
      resolve(data);
    });
  });
}

http.createServer((req, res) => {
  
  /**
   * CORS跨域配置
   */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  /*--------------------------------*/

  if (req.method === 'OPTIONS') return res.end();  // 让options请求快速返回

  let {pathname, query} = url.parse(req.url, true); // true把query转换成对象

  if (pathname === '/vue-book/sliders') {
    setTimeout(() => {
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      return res.end(JSON.stringify(sliders));
    }, 800);
  }

  if (pathname === '/vue-book/page') {
    let offset = parseInt(query.offset) || 0;
    let pageSize = parseInt(query.pageSize) || 5;
    (async () => {
      try {
        let books = await readBooksPromise();
        // 每次偏移量，在偏移的基础上增加5条
        let result = books.reverse().slice(offset, offset+pageSize);
        let hasMore = true;
        result.length < pageSize ? hasMore = false : hasMore = true;
        setTimeout(() => {
          res.setHeader('Content-Type', 'application/json;charset=utf8');
          res.end(JSON.stringify({
            books: result,
            hasMore
          }));
        }, 800);
      } catch (e) {
        res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
        console.log(e);
      }    
    })();
  }

  if (pathname === '/vue-book/hot') {
    (async () => {
      try {
        let books = await readBooksPromise();
        let hotBooks = books.reverse().slice(0, 6);
        res.setHeader('Content-Type', 'application/json;charset=utf8');
        res.end(JSON.stringify(hotBooks));
      } catch (e) {
        res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
        console.log(e);
      }
    })()
    return ;
  }

  // 对书的增删改查
  if (pathname === '/vue-book/book') {   
    // ?id=1
    let id = parseInt(query.id);
    
    switch (req.method) {
      case 'GET':
        if (id) {
          // 查询某本书
          (async () => {
            try {
              let books = await readBooksPromise();
              let book = books.find((book) => book.bookId === id) || {};
              res.setHeader('Content-Type', 'application/json;charset=utf8');
              res.end(JSON.stringify(book));
            } catch (e) {
              res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
              console.log(e);
            }
          })()
        } else {
          // 获取所有图书
          (async () => {
            try {
              let books = await readBooksPromise();
              books.reverse();
              res.setHeader('Content-Type', 'application/json;charset=utf8');
              res.end(JSON.stringify(books));
            } catch (e) {
              res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
              console.log(e);
            }
          })()
        }
        break;
      case 'POST':
        if (id) {

        } else {
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', chunk => {
            let newBook = JSON.parse(str).book;
            (async () => {
              try {
                let books = await readBooksPromise();
                newBook.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
                books.push(newBook);
                await writeBooksPromise(books);
                res.setHeader('Content-Type', 'application/json;charset=utf8');
                res.end(JSON.stringify(newBook));
              } catch (e) {
                res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
                console.log(e);
              }
            })();
          });
        }
        break;
      case 'PUT':
        if (id) {
          // 获取当前要修改的id
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', chunk => {
            // book就是修改后的对象
            let modifiedBook = JSON.parse(str).book;
            (async () => {
              try {
                let books = await readBooksPromise();
                books = books.map((book) => {
                  if (book.bookId === id) {
                    // 找到id相同的那一本书，用新的替换
                    return modifiedBook;
                  }
                  return book;
                });
                await writeBooksPromise(books);
                res.setHeader('Content-Type', 'application/json;charset=utf8');
                res.end(JSON.stringify(modifiedBook));
              } catch (e) {
                res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
                console.log(e);
              }
            })();
          });
        }
        break;
      case 'DELETE':
        (async () => {
          try {
            let id = parseInt(query.id);
            let books = await readBooksPromise();
            books = books.filter((book) => book.bookId !== id);
            await writeBooksPromise(books);
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            // 删除返回空对象
            res.end(JSON.stringify({}));
          } catch (e) {
            res.end(JSON.stringify({errorCode: -1, erronInfo: e.message}));
            console.log(e);
          }
        })()
        break;
      default:
        break;
    }
  }
}).listen(3001);

console.log('server running at http://localhost:3001');