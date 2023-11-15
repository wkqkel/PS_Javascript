const fs = require('fs');
const n = +fs.readFileSync('dev/stdin').toString().trim();

// ch1 : x
// ch2 : x + y
// ch3 : x - y + n -1
const ch1 = Array.from({length: n+1}, () => false);
const ch2 = Array.from({length: (n + 1)* 2}, () => false);
const ch3 = Array.from({length: n+1}, () => false);

let res = 0;
function recur(y){
  if(y===n) {
    res++
    return;
  }

  for(let x=0;x<n;x++){
    if(!ch1[x] && !ch2[x+y] && !ch3[x-y+n-1]) {
      ch1[x] = ch2[x+y] = ch3[x-y+n-1] = true;
      recur(y+1);
      ch1[x] = ch2[x+y] = ch3[x-y+n-1] = false;
    }
  }
}

recur(0)
console.log(res)

