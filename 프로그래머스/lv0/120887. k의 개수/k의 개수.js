function solution(i, j, k) {
    let ans = 0
    for(let cur=i; cur<=j; cur++){
        ans += [...(cur+'')].filter(v=> +v===k).length
    }
    return ans
}