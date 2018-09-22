console.log('start');

let fs = require('fs');

fs.readFile('./note.txt', 'utf-8', (err, data) => {
  setTimeout(() => {
    console.log(111);
    setTimeout(() => {
      console.log(222);
    }, 0);
    setImmediate(() => {
      console.log(333);
    })
    process.nextTick(() => {
      console.log(444);  
    })
  }, 0);
  
  setImmediate(() => {
    console.log(555);
    process.nextTick(() => {
      console.log(666);  
    })
  })
  
  setTimeout(() => {
    console.log(777);
    process.nextTick(() => {
      console.log(888);  
    })
  }, 0);
  
  process.nextTick(() => {
    console.log(999);  
  })
});


console.log('end');

/* 执行结果
start
end
999
111
777
444
888
555
333
666
222
*/