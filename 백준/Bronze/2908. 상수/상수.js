const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ')

function 상수대답(arr){
  return Math.max(...arr.map(v=> +[...v].reverse().join('')))
}

console.log(상수대답(input))
