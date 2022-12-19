function checkPrimeNumber(n){
    for(let i=2; i<n; i++){
        if(n%i===0 && n!==i) return false
    }
    return true
}

function solution(n) {
    let ans =[]
    for(let i=2; i<=n; i++){
        if(n % i===0) ans.push(i)
    }
    return ans.filter(checkPrimeNumber)
}