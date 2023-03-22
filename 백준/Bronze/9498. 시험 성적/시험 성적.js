const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('/n').map(Number)

function changeToGrade(n){
  if(n>=90) return 'A'
  if(n>=80) return 'B'
  if(n>=70) return 'C'
  if(n>=60) return 'D'
  return 'F'
}

console.log(changeToGrade(input))