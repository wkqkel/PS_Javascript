const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').slice(1).map(v=>v.split(' '))

input.sort((a,b)=> a[1]===b[1] ? a[0]-b[0] : a[1]-b[1])
let res = ''
input.forEach(v=>{
  res += v.join(' ') + '\n'
})
console.log(res)