function getCombination(arr, n) {
    if(n===1) return arr.map((v)=> [v]);
    const results = [];
    
    arr.forEach((fixed, idx, origin) =>{
        const rest = origin.slice(idx + 1);
        const combinations = getCombination(rest, n-1);
        const attached = combinations.map((v) => [fixed, ...v]);
        results.push(...attached);
    })
    
    return results
}

function solution(numbers){
    return getCombination(numbers, 3)
        .filter(item=>item.reduce((acc,cur)=> acc+cur,0)===0).length
}