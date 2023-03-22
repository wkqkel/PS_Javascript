const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)


const n = input[0];

const arr = Array.from({length:n},(v,i)=> i+1);

console.log(arr.reduce((a,b)=>a+b));