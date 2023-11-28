const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);

let min = 99999999999;

let st = 0;
let en = 1;
let sum = 0;

while(st < n && en < n){
  sum = arr[en] - arr[st] 
  if(sum < m) {
    en++;
  } else {
    st++;
  }
  if(min > sum && sum >= m) min = sum;
}
console.log(min)

