function solution(array, commands) {
    // 문제에서 n번째라고 표현 => 인덱스로 치환하면 n-1
    return commands.map(([i,j,k])=> array.slice(i - 1,j).sort((a,b)=> a-b)[k-1])
}