function factorial(n){
    if(n<=1) return BigInt(1)
    return BigInt(n) * factorial(n-1)
}


function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share))
}

