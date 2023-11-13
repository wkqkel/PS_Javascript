/** 
1. 아이디어
- 재귀 L,x 넘기면서 반복문 x+1~n
- 방문 체크 X
- l = m 되면 출력 

2. 시간복잡도
- n은 8이고 n!이하이므로 가능

3. 자료구조
- arr: 조건을 만족하는 수열 보관
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ')
const [n,m] = input.map(Number)
let arr = []
function recur(L,x){
  if(L===m){
    console.log(arr.join(' '));
    return
  }
  for(let i=x;i<=n;i++){
    arr.push(i)
    recur(L+1,i)
    arr.pop(i)
  }
}

recur(0,1)