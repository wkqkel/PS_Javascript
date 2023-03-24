const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const arr = input.slice(1)

arr.forEach((v)=>{
  const ar = v.split(' ').slice(1).map(Number);

  const average = ar.reduce((a,b)=> a+b) / ar.length

  const overAverage = ar.filter(v=> v>average)
  const res = overAverage.length / ar.length * 100;
  console.log(res.toFixed(3)+'%')
})