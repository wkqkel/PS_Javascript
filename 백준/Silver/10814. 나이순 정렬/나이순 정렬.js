const fs = require('fs');
const [n,...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const arr = input.map(v=>v.split(' '))
arr.sort((a,b)=>{
  if(a[0]==b[0]) return 0
  return a[0] - b[0]
})
let res = ''
arr.forEach((v)=>{
  res += v.join(' ') + '\n'
})
console.log(res)