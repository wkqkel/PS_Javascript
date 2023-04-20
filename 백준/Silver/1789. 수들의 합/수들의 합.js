const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let rest = +input
let n = 1;

while(rest >=0){ 
  if(rest ===n) return console.log(n)
  if(rest < n) return console.log(n-1)
  rest -= n++;
}
