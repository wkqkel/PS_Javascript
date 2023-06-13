let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');

const 연속제거된배열 = input.filter((v,i,list)=> v !== list[i+1]);
const findLengthOnlyN = (n) => 연속제거된배열.filter(v=>+v===n).length;
console.log(Math.min(findLengthOnlyN(1), findLengthOnlyN(0)));