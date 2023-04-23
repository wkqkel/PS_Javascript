const fs = require('fs');
let [n,k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

// sum은 1부터 k까지의 합
const sum = Array.from({length: k},(v,i)=>i+1).reduce((a,b)=>a+b);
// 공의 갯수가 부족한 경우
if(sum > n) return console.log(-1)
// 공의 갯수가 충분한 경우
n -= sum;
if(n % k === 0) return console.log(k - 1) // k개에 각각 1개씩 더하기
console.log(k)