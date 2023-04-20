const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const K = input[0].split(' ')[1];
const arr = input.slice(1);
let rest = K;
let res = 0;
for(let i= arr.length-1; i>=0; i--) {
  res += Math.floor(rest / arr[i])
  rest = rest % +arr[i];
};
console.log(res)
