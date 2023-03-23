const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const set = new Set();

// input.forEach(v => {
//  set.add(Number(v) % 42)
// })

for (let i=0; i<10;i++){
  set.add(Number(input[i]) % 42)
}

console.log(set.size)