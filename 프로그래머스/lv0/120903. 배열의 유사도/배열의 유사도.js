function solution(s1, s2) {
    // let ans = 0 
    // for (let x of s1) if(s2.includes(x)) ans++
    // return ans
    return s1.filter(x=> s2.includes(x)).length
}