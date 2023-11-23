/** 
1. 아이디어
- 반복문을 0부터 < (b-a)/2까지돌면서 변수에 등록해놓고 스왑
4 9 -> 5 / 2 = 2.5
4 5 6 
7 8 9
4 8 -> 4 / 2 = 2 
4 5 6 
7 8 

2. 시간복잡도
- n * m = 100 * 100 = 10000 >> 가능

3. 변수
- temp: 임시변수
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const buckets = Array.from({length:n+1},(v,i)=>i)
const arr = input.slice(1).map(v=>v.split(' ').map(Number));

for(let [a,b] of arr) {
  for(let i = 0; i <(b-a)/2;i++){
    const temp = buckets[a+i];
    buckets[a+i] = buckets[b-i];
    buckets[b-i] = temp;
  }
}

console.log(buckets.slice(1).join(' '))