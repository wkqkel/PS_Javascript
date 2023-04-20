const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const arr = input.split('-')
let res = 0
for(let i = 0; i<arr.length; i++){
  const sum = arr[i].split('+').map(Number).reduce((a,b)=>a + b)
  res = i===0 ? res + sum : res - sum
}
console.log(res)