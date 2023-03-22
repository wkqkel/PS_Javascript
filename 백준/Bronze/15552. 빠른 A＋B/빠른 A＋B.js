const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let res = '';

for(let i=1; i<=input[0]; i++){
  const [a,b] =input[i].split(' ')
  res += +a + +b +'\n'
}

console.log(res)
