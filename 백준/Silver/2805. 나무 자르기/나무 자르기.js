const fs = require("fs");
const filePath = "/dev/stdin";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

const [N,M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

let start = 0;
let end = arr[arr.length - 1]

let res
while(start <= end){
  const mid = parseInt((start + end) / 2);
  const sum = arr.reduce((acc,cur)=> acc + Math.max(cur-mid,0) ,0)
  if(sum >= M) {
    start = mid + 1;
    res = mid
  } else {
    end = mid -1
  }
}
console.log(res)