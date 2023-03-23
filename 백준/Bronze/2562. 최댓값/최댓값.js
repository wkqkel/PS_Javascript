const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number);

let max = 0;
let order = -1;

for(let i=0; i<input.length; i++) {
  if(input[i]>max){
    max = input[i];
    order = i + 1
  }
}

console.log(max + '\n' + order)
