function checkCompositionNumber(n){
    for(let i=2; i<n; i++){
        if(n%i===0 && i!==n) return true
    }
    return false
}

function solution(n) { 
    let ans =0
    for(let i=1; i<=n; i++){
        if(checkCompositionNumber(i)) ans++
    }
    return ans
}