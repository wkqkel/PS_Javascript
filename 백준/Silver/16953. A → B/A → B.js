const fs = require('fs');
const [A,B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

// 2를 곱한다. => 2를 나눈다
// 1을 수의 가장 오른쪽에 추가한다. => 가장 오른쪽의 1을뺀다
let cur = B
let n= 0
while(+cur > +A){
  n++
  if(cur[cur.length-1]=== '1'){
    cur = cur.slice(0, -1)
    continue
  }
  cur = String(cur / 2)
}
if(+cur < +A) return console.log(-1)
console.log(+n+1)