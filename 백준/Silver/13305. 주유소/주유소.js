const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[0];
const roadArr = input[1].split(' ').map(Number);
const priceArr = input[2].split(' ').map(Number).slice(0,-1);
// 마지막꺼에서 살일은 없음. 그 이후엔 가지않으니까 기름필요X

let res = 0
// 뒤에서부터 돌면서, 앞에서 제일싼인덱스에서 그 사이 인덱스의 거리까지 사고와야함.
// https://www.acmicpc.net/board/view/79399
// 

// 5
// 0 2 3 1 1
// 5 2 4 1 1
// 답 : 19
let prevMinIdx = priceArr.length 
for(let i = priceArr.length-1; i>=0; i--){
  
  const min = Math.min(...priceArr.slice(0,i+1));
  const minIdx = priceArr.findIndex(v=>v===min);

  if(i===minIdx) {
    res += roadArr.slice(i,prevMinIdx).reduce((a,b)=>a+b) * priceArr[i]
    prevMinIdx = i
  }
}
console.log(res)