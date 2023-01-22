
// 방법 1. for 문으로 풀기
function solution(n, m) {
  let gcd, lcm
  for(let i=Math.min(n,m); i>=1; i--){
     if(n%i===0 && m%i===0) {
         if(!gcd) gcd = i
         if(!lcm) lcm = n * m / i
     }
   
     if(lcm && gcd) return [gcd, lcm]
  }
}

// 방법2. 재귀 이용
function solution(n, m) {
    return [getGreatestCommonDivision(n,m), getLeastCommonMultiple(n,m)]
}
function getGreatestCommonDivision(a,b){
    return b % a ? getGreatestCommonDivision(b % a ,a) : a
}

function getLeastCommonMultiple(a,b){
     return Math.min(a,b) / getGreatestCommonDivision(a,b) * Math.max(a,b)
}