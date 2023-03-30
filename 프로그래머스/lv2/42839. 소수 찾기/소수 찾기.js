function isPrime(n){
    if(n<=1 ||n == null) return false;
    for(let i=2; i*i<=n;i++){
        if(n%i===0) return false
    }
    return true
}

function isCorrectMapping(n,map){
    for (let x of String(n)){
      if(map.get(x) <=0 || map.get(x) == null) {
          return false
      }
      map.set(x, map.get(x) - 1)
    }
    return true
}

function solution(numbers) {
    // 1. numbers를 내림차순으로 정렬한 후 문자열로 만들고, 만들 수 있는 최댓값을 구함
    const reverse = [...numbers].sort((a,b)=> +b - +a).join('');
    const max = +reverse;
    const ans = []
    const map = new Map();
    [...numbers].map(v=> map.set(v, (map.get(v)|0) + 1 ))
    // 2. 매핑한거랑 isPrime체크
    for(let i=2; i<=max; i++){
      if(isCorrectMapping(i,new Map(map)) && isPrime(i)){
          ans.push(i)
      }
    }
    return ans.length
}