const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);



let st = 0;
let en = 0;
let tot = arr[0];
let min = 9999999999
while(st < n && en < n) {
  if(tot < s){
    tot += arr[++en]
  } else {
    min = Math.min(min, en - st + 1)
    tot -= arr[st++]
  }
}

console.log(min === 9999999999 ? 0 : min)
