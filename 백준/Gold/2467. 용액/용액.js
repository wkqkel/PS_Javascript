const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').sort((a,b)=>a-b).map(Number)

let res
let lt = 0;
let rt = n -1;
let min = 99999999999;

while(lt < rt) {
  const sum = arr[rt] + arr[lt];
  const abs = Math.abs(sum)
  if(abs < min) {
    min = abs;
    res = arr[lt] + ' ' + arr[rt]
  }
  if (sum < 0) 
    lt++;
  else 
    rt--;
}

console.log(res)