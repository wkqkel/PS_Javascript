const fs = require("fs");

let input = fs.readFileSync('dev/stdin').toString();

function fibo(n){
  if(n <= 1) return n;
  
  return fibo(n-1) + fibo(n-2)
}

console.log(fibo(+input))