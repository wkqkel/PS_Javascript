const fs = require("fs");
const filePath = "/dev/stdin";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

const [K,N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);

let start = 1;
let end = arr.at(-1);
let res

while(start<=end){
  const mid = parseInt((start+end)/2);
  const sum = arr.reduce((acc,cur)=> acc + parseInt(cur / mid), 0)
  if(sum >= N){
    start = mid + 1
    res = mid
  } else {
    end = mid - 1
  }
}
console.log(res)