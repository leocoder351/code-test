console.log(1)

setTimeout(() => {
  console.log(2);
  Promise.resolve(100).then(() => {
    console.log('promise')
  })
})

let promise = new Promise((resolve, reject) => {
  console.log(7)
  resolve(100)
}).then((data) => {
  console.log(data);
})

setTimeout(() => {
  console.log(3);
})

console.log(5);

process.nextTick(() => {
  process.nextTick(() => {
  
  })
})


/* node环境
1
7
5
100
2
3
promise
*/

/* 浏览器环境
1
7
5
100
2
promise
3
*/

// 两个环境有差异是因为：
/*
这个是因为可以理解成浏览器只有一个macrotask队列，每次只取一个出来执行，
但是node中是有好几个macrotask，比如timers，setTimeout这些就在timers队列里，
有6个阶段，执行到timers这个阶段的时候，要把队列里所有的任务都拿出来执行

总结：浏览器是从macrotask只拿一个出来执行然后就去执行microtask，node是把timers中的所有macrotask都拿出来执行
*/