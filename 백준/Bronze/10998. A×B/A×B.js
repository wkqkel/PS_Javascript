const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)

const multiply = (a, b) => a * b;
const [a,b] = input;
console.log(multiply(a,b));