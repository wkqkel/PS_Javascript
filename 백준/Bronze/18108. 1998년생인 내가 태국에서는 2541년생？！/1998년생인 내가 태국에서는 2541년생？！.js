const fs = require("fs");

let input = fs.readFileSync('dev/stdin').toString().split("\n"); 

const diff = 2541 - 1998;

console.log(+input[0] - diff)

