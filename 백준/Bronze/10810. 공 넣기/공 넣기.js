/** 
1. 아이디어
- n,m,arr을 받고
- arr을 돌면서 i,j,k
- i,j까지 돌면서 res[idx] = k
- res출력

2. 시간복잡도
- 2중포문: 100 * 100 = 10000 < 2억이하

3. 자료구조
- res: int[]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v=>v.split(' ').map(Number))

const res = Array(n+1).fill(0)
for(let a =0;a<arr.length;a++){
  const [i,j,k] = arr[a];
  for(let b = i; b<=j;b++){
    res[b] = k
  }
}

console.log(res.slice(1).join(' '))