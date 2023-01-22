

function solution(a, b) {
  let gcd, lcm
  for(let i=Math.min(a,b); i>=1; i--){
     if(a%i===0 && b%i===0 ) {
         if(!gcd) gcd = i
         if(!lcm) lcm = a * b / i
     }
   
     if(lcm && gcd) return [gcd, lcm]
  }
 
}

function getGreatestCommonDivision(a,b){
    return b % a ? getGreatestCommonDivision(b % a ,a) : a
}