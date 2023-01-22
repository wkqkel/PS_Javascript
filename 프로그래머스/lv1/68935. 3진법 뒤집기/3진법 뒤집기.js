function solution(n) {
    // parseInt(string, n) : n진법을 10진법으로 변환
    // toString(n) : 10진법을 n진법으로 변환
    return parseInt([...n.toString(3)].reverse().join(''),3)
}