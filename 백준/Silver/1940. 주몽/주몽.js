/** 
1. 아이디어
- 일단 그냥 단순 2중포문
  -  10^7^2 > 2억 이므로 불가능 
- check배열을 만들고
- m-arr[i]가 있으면 cnt++
- check[arr[i]] = true 

2. 시간복잡도
- O(n)

3. 자료구조 
- check: int[]

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m] = [input[0],input[1]].map(Number);

const arr = input[2].split(' ');

const check = Array(1e7).fill(false);
let cnt = 0;

for(let i = 0; i < n; i++){
  if(check[m - arr[i]]) cnt++;
  check[arr[i]] = true;
}

console.log(cnt)