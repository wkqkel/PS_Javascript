const getCombinations = (arr, n) =>{
    if(n===1) return arr.map(v=>[v])
    const res = [];
    arr.forEach((cur,idx, list)=>{
        const rest = list.slice(idx + 1);
        const combinations = getCombinations(rest, n-1);
        const attached = combinations.map(v => [cur, ...v])
        res.push(...attached);
    })
    return res
}

function solution(numbers) {
    // return [...new Set(getCombinations(numbers, 2).map((v)=> v[0] + v[1]).sort((a,b)=> a-b))]

    // 2중for문으로 풀기
    const set = new Set()
    for(let i = 0; i<numbers.length; i++){
        for(let j = i + 1; j<numbers.length; j++){
           set.add(numbers[i] + numbers[j]) 
      }
    }
    return [...set].sort((a,b)=> a-b)
}