const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)

const [H, M] = input;

function minusTime(H,M){
  if(M - 45 >= 0) {
    return `${H} ${M-45}`
  }
  if(H === 0) {
    return `${23} ${M + 15}`
  }
  return `${H-1} ${M + 15}`
}
console.log(minusTime(H, M))