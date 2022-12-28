function solution(a, b) {
    function getIrreducibleFractionDenominator(a,b){
        for(let i=a; a>1; i--){
            if(a%i===0 && b%i===0) return b/i
        }
    }
   const denominator = getIrreducibleFractionDenominator(a,b)

   for(let i=3; i<=denominator; i++){
       if(i % 2 ===0 || i % 5 ===0) continue;
       if(denominator % i === 0) return 2
   }
   return 1
}