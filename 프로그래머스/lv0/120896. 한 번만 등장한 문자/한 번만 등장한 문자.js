function solution(s) {
    const sorted = [...s].sort()
    return sorted.filter((e,i,list)=> e!==list[i+1] && e!==list[i-1]).join('')
}