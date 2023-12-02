/** 
1. 아이디어
- 정렬한뒤 [-99,-2,-1,-0.5,0.5,4,98]
- lt=0, rt=n-1를 정해서,
- abs = abs(arr[rt] + [lt])를 
- abs랑 min 비교해서 갱신
- while(Math.abs(arr[lt]) <= abs(arr[rt])) lt--
- rt--
*/

// const arr = [-2, 4, -99,-0.5, -1,0.3, 98].sort((a,b)=>a-b);
// const n = arr.length;

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