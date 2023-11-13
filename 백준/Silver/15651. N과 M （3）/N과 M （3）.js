/** 
1. 아이디어
- recur(L) 넘김
- 방문체크 X

2. 시간복잡도
- n^n > n은 최대 7 << 8이하이므로 가능

3. 자료구조
- arr: 수열
*/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ')
const [n,m] = input.map(Number)
const arr = []
let res = ''
function recur(L){
  if(L===m) {
    res += arr.join(' ') + '\n'
    return
  }
  for(let i = 1; i<=n;i++){
    arr.push(i)
    recur(L+1)
    arr.pop()
  }
}
recur(0)

console.log(res.trim())