const fs = require('fs');
const n = +fs.readFileSync('dev/stdin').toString().trim()

// const n = 41;

// 에라토스테네스체
// O(NloglogN)
const primes = [];
const check = Array(n+1).fill(true)
for(let i = 2; i * i <= n;i++){
  if(!check[i]) continue;
  for(let j = i*i; j<=n; j+=i){
    // 왜 i*2가 아니라 i*i? i*2는 이미 2의배수에서 걸려저서 false
    check[j] = false
  }
}
for(let i =2; i<=n;i++) {
  if(check[i]) primes.push(i);
}

let lt = tot = cnt = 0;

for(let rt = 0; rt < primes.length; rt++) {
  tot += primes[rt];
  while(tot > n) tot -= primes[lt++];
  if(tot === n) cnt++;
}
console.log(cnt)