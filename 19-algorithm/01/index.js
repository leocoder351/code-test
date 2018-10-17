const fs = require('fs');
const path = require('path');
const ipFile = fs.readFileSync(path.resolve(__dirname, './ip.txt'), 'utf-8');
const ipArray = ipFile.match(/.+/g);

let obj = {};
let newIpTimesArray = [];

ipArray.forEach(ip => {
  if (obj[ip] === undefined) {
    obj[ip] = 1;
  } else {
    obj[ip] += 1;
  }
});

for (let key in obj) {
  console.log(`${key} 共出现：${obj[key]} 次`);
  newIpTimesArray.push({
    ip: key,
    times: obj[key]
  });
}

newIpTimesArray.sort((a, b) => {
  return b.times - a.times;
});

let writeFileStr = '';

newIpTimesArray.forEach(ipTime => {
  let times = ipTime.times;

  while (times--) {
    writeFileStr += ipTime.ip + '\n';
  }
});

fs.writeFileSync(path.resolve(__dirname, 'ip-sort.txt'), writeFileStr, 'utf-8');

