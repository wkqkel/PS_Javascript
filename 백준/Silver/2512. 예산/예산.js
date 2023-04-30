const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const m = Number(input[2]);


let start = 1;
let end = arr[arr.length - 1]

let res
while(start <= end) {
  const mid = parseInt((start+end) / 2);
  const total = arr.reduce((acc,cur)=> acc+Math.min(cur,mid),0)
  if(total <= m){
    start = mid + 1;
    res = mid;
  } else {
    end = mid -1
  }
}

console.log(res)
