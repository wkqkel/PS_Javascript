function solution(n) {
    // const ans = []
    // for(let i=1; i<=n; i++){
    //   if(n % i===0) ans.push(i)
    // }
    // return ans
   // return [...Array(n+1).keys()].filter(e=> n%e===0)
   return Array(n).fill(0).map((e,i)=> i+1).filter(e=> n%e===0)
}

