const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').slice(1)
const set = [...new Set(input)]
set.sort((a,b)=>{
  if(a.length === b.length){
    return a > b ? 1: -1
  }
  return a.length - b.length
})
console.log(set.reduce((acc,cur)=>acc+cur+'\n',''))