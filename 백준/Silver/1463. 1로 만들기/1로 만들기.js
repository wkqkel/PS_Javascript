/** 

*/

const fs = require('fs')
const input = +fs.readFileSync('dev/stdin').toString();

const N = input;
const dp = Array.from({length:N+1},()=>1000);
dp[1] = 0

for(let i = 1; i<=N;i++){
  dp[i+1] = Math.min(dp[i+1],dp[i]+1);
  dp[i*2] = Math.min(dp[i*2],dp[i]+1);
  dp[i*3] = Math.min(dp[i*3],dp[i]+1);
}
console.log(dp[N])

