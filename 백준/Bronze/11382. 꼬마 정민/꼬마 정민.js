const fs = require("fs");

let input = fs.readFileSync('dev/stdin').toString().split(" "); 

console.log(input.reduce((a,b)=> +a + +b))