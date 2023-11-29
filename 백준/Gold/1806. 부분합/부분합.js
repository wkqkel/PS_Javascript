const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,s] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let mn = 0x7fffffff;

let tot = a[0];
let en = 0;

for(let st = 0; st < n; st++){
  while(en < n && tot < s) {
    en++;
    if(en != n) tot += a[en]
  }
  if(en == n) break;
  mn = Math.min(mn, en - st + 1);
  tot -= a[st];
}

if(mn== 0x7fffffff) mn = 0;

console.log(mn)