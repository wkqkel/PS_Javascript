function solution(n) {
    let len = n
    for(let i = 1; i<=len; i++) {
        if(i % 3 === 0 || (i + "").includes('3')) len++
        if(i===len) return i
    }
}