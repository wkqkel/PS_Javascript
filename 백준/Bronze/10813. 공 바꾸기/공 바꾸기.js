/** 
1. 아이디어
- N까지 배열 i로 초기화
- 주어진 케이스 루프 돌면서,
- swap(i,j)
- 배열출력
2. 시간복잡도
- O(N)
3. 자료구조
- arr: 어떻게 바꿀지 들어있는 배열
- buckets: 바구니 배열 int[]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
2
const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v=>v.split(' ').map(Number));

const buckets = Array(n+1).fill(0).map((v,i)=>v+i);
for(let x of arr) {
  const [i,j] = x
  let tmep = buckets[i];
  buckets[i] = buckets[j];
  buckets[j] = tmep;
}

console.log(buckets.slice(1).join(' '))