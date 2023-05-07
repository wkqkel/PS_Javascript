let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)
console.log([...A,...B].sort((a,b)=>a-b).join(' '))