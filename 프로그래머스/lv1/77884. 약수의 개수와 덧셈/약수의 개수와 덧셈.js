
function solution(left, right) {
   // Number.isInteger 정수인지 판별
   // 제곱근이 정수면 약수의 갯수는 홀수다 
   return Array(right-left+1).fill(left).map((v,i)=>v+i)
          .reduce((acc,cur)=> acc + cur * (+!Number.isInteger(Math.sqrt(cur)) || -1),0)
}

// function hasEvenPrimesLength(n) {
//     const arr = []
//     for(let i=1; i<=n; i++){
//         if(n % i === 0) arr.push(i)
//     }
//     return arr.length % 2 === 0
// }

// function solution(left, right) {
//    return Array(right-left+1).fill(left).map((v,i)=>v+i)
//           .reduce((acc,cur)=> acc + cur * (+hasEvenPrimesLength(cur) || -1),0)
// }