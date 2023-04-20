const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let rest = +input;
let count = 0;

if(rest >= 5){
 count = Math.floor(rest / 5)
 rest %= 5
}

while(!(rest%3===0)){
  rest += 5
  count -= 1
}
if(count<0) return console.log(-1)
count += Math.floor(rest / 3)
console.log(count)