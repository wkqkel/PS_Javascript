const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)

const max = Math.max(...arr)
const data = new Array(max+1).fill(0)
let res = 0
for(let x of arr){
  if(data[x]){
    data[x-1] += 1
    data[x] -= 1
  } else{
    data[x-1] += 1
    res++
  }
}
console.log(res)

