function getGCD(a,b){
    return b % a === 0? a : getGCD(b% a, a)
}

function getLCM(a,b) {
    return  a * b / getGCD(a,b)
}

function solution(arr) {
  return arr.reduce((acc,cur)=> getLCM(acc,cur), 1)
}
    
