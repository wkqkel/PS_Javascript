function hasEvenPrimesLength(n) {
    const arr = []
    for(let i=1; i<=n; i++){
        if(n % i === 0) arr.push(i)
    }
    return arr.length % 2 === 0
}

function solution(left, right) {
   return Array(right-left+1).fill(left).map((v,i)=>v+i)
          .reduce((acc,cur)=> acc + cur * (+hasEvenPrimesLength(cur) || -1),0)
}