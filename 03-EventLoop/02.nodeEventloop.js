console.log('start');

setImmediate(() => console.log('immediate1'));
setImmediate(() => console.log('immediate2'));

setTimeout(() => console.log('setTimeout1'), 1000);
setTimeout(() => {
    console.log('setTimeout2');
    process.nextTick(() => console.log('nextTick1'));
}, 0);
setTimeout(() => console.log('setTimeout3'), 0);

process.nextTick(() => console.log('nextTick2'));
process.nextTick(() => {
    process.nextTick(console.log.bind(console, 'nextTick3'));
});
process.nextTick(() => console.log('nextTick4'));

console.log('end');

/* 执行结果
start
end
nextTick2
nextTick4
nextTick3
setTimeout2
setTimeout3
nextTick1
immediate1
immediate2
setTimeout1
*/