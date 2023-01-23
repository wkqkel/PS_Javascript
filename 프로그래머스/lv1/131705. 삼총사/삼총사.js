function getCombinations(arr, n) {
    if(n === 1) return arr.map(v=>[v])
    const res = [];
    arr.forEach((fixed, idx, origin)=>{
        const rest = origin.slice(idx + 1);
        const combinations = getCombinations(rest, n - 1);
        const attached = combinations.map((v)=> [fixed,...v])
        res.push(...attached)
    })
    return res
}

function solution(numbers){
  return getCombinations(numbers, 3).filter(v=> v.reduce((acc,cur)=> acc+cur,0)===0).length
}


