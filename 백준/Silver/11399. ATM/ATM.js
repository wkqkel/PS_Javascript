const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const arr= input[1].split(' ').map(Number).sort((a,b)=>a-b)

let sum = 0;
let ans = 0;
for(let i=0; i<arr.length;i++){
  sum += arr[i] // 각 사람이 돈을 인출할 때 필요한 시간 => 앞사람들이 걸린 시간+자기시간
  ans += sum //  각 사람이 돈을 인출하는데 필요한 시간의 합
}
console.log(ans)