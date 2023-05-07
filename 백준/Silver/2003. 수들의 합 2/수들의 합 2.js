let file = require("fs").readFileSync("dev/stdin");
let input = file.toString().split("\n");

const [n,k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let end = 0;
let sum = 0;
let res = 0;
for(let start=0; start<n; start++){
  while(sum <= k) {
    if(sum===k) res++
    sum += arr[end];
    end++ 
  }

  sum -= arr[start]
}
console.log(res)