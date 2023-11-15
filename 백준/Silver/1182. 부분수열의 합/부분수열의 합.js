const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n,s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number)
const ch = []
const tmp = []
let cnt = 0;

function recur(L,prev,sum){
  if(tmp.length && sum === s) {
    cnt++
  }
  if(L === n) {
    return
  }

  for(let i=prev; i<n;i++){
    if(ch[i]) continue;
    ch[i] = true
    tmp.push(arr[i])
    recur(L+1,i,sum+arr[i]);
    tmp.pop()
    ch[i] = false
  }
}

recur(0,0,0)
console.log(cnt)

