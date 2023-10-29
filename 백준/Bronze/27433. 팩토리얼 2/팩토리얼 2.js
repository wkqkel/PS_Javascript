const fs = require("fs");

let input = fs.readFileSync('dev/stdin').toString();

function factorial(n){
  if(n === 0) return 1;
  
  return n * factorial(n-1)
}

console.log(factorial(+input))