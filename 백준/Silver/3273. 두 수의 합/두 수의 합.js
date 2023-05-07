let file = require("fs").readFileSync("dev/stdin");
let input = file.toString().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const x = +input[2];

let left = 0;
let right = n-1;
let res = 0
while(left<right){
  if(arr[left] + arr[right] === x){
    res++
  }
  if(arr[left] + arr[right] <= x) {
    left++
  }else if(arr[left] + arr[right] > x) {
    right--
  }
}
console.log(res)