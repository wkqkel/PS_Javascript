const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim()
//       a c         a 
console.log(input.split(' ').filter(Boolean).length)
