const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);

// 내풀이
// let min = 99999999;

// let st = 0;
// let en = 1;
// let sum = 0;

// while(st < n && en < n){
//   sum = arr[en] - arr[st] 
//   if(sum < m) {
//     en++;
//   } else {
//     st++;
//   }
//   if(min > sum && sum >= m) min = sum;
// }
// console.log(min)

// 강의
let en = 0;
let min = 9999999999;

for(let st =0; st<n;st++){
  while(en < n && arr[en] - arr[st] < m) en++;
  if(en == n) break;
  min = Math.min(min, arr[en]-arr[st])
}

console.log(min)
