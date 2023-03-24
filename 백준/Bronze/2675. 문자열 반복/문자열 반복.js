const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const arr = input.slice(1)

const res = arr.map(v=>{
 const [n, arr] = v.split(' ');
 return [...arr].map(v=> v.repeat(n)).join('')
})
console.log(res.join('\n'))