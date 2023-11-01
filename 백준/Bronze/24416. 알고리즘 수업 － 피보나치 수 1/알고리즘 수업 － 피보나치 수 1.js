const fs = require("fs");

let input = +fs.readFileSync('dev/stdin').toString().trim()

const answer = [0,0]
  
function dfsFibo(n){
  if(n<=2) {
    answer[0]++
    return 1;
  }
  return dfsFibo(n-1) + dfsFibo(n-2);
}
dfsFibo(input)

function dpFibo(n){
  const arr = [];
  arr[2] = arr[1] = 1;
  for(let i = 3; i <=n; i++){
    answer[1]++
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n]
}
dpFibo(input)

console.log(answer.join(' '));