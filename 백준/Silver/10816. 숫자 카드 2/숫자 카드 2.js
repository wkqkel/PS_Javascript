let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const card = input[1].split(' ').reduce((acc,cur)=> {
  acc.set(+cur, (acc.get(+cur) || 0)+1);
  return acc;
}, new Map())

console.log(input[3].split(' ').map(v=> card.get(+v)|| 0).join(' '))