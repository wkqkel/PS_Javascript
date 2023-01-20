function solution(n) {
   // return Array(n-1).fill(2).map((v,i)=>v+i).filter(v=>n%v===1)[0]
    for(let i=2; i<n; i++){
        if(n % i === 1) return i
    }
}