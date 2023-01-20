function solution(s) {
    return [4,6].includes(s.length) && !!(Math.max(...s) + 1 )
}