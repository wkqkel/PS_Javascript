
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n,s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number)

// 방법1 : 내풀이
// const ch = []
// const tmp = []
// let cnt = 0;

// function recur(L,prev,sum){
//   if(tmp.length && sum === s) {
//     cnt++
//   }
//   if(L === n) {
//     return
//   }

//   for(let i=prev; i<n;i++){
//     if(ch[i]) continue;
//     ch[i] = true
//     tmp.push(arr[i])
//     recur(L+1,i,sum+arr[i]);
//     tmp.pop()
//     ch[i] = false
//   }
// }

// recur(0,0,0)
// console.log(cnt)

// 방법2: 강의풀이
// 현재값을 더할지 말지의 경우의 수로 나뉨.
let res = 0
function func(cur,tot){
  if(cur === n) {
    if(tot === s) res++
    return;
  }
  
  func(cur+1,tot);
  func(cur+1,tot+arr[cur])
}

func(0,0)
console.log(s===0 ? res - 1: res)