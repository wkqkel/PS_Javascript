function solution(s) {
    // Math.max는 만약 인수 중 하나라도 숫자로 변환하지 못한다면 NaN로 반환
    return [4,6].includes(s.length) && !!(Math.max(...s) + 1 )
}