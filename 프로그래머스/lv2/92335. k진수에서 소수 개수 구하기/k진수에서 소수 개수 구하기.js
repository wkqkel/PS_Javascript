function isPrime(n){
    if(n<=1) return false
    for(let i=2; i*i<=n;i++){
        if(n % i === 0) return false
    }
    return true
}

function solution(n, k) {
 return (n).toString(k).split('0').filter(isPrime).length;
}