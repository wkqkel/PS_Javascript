function solution(s) {
    return  [...s].sort()
                  .filter((e,i,list)=> e!==list[i+1] && e!==list[i-1])
                  .join('')
    // let ans = []
    // for(let x of s) if(s.indexOf(x) === s.lastIndexOf(x)) ans.push(x)
    // return ans.sort().join('')
}