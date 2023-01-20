function solution(s) {
    // Math.max는 만약 인수 중 하나라도 숫자로 변환하지 못한다면 NaN로 반환
    // 숫자로 변환하는 경우, 문자열에 e가 포함되면 숫자로 인식할 수 있어, 이를 제외하는 조건이 하나 더 필요
    return [4,6].includes(s.length) && !!(Math.max(...s) + 1 )
}