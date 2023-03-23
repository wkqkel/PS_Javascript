const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n')

const n = +input[0]
const arr = input[1].split('').map(Number);

const res = arr.reduce((a,b)=>a+b);
console.log(res)