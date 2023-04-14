const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number).slice(1);

input.sort((a,b)=>a-b).forEach(v=>console.log(v))