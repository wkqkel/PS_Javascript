function solution(s) {
    // Math.max는 만약 인수 중 하나라도 숫자로 변환하지 못한다면 NaN로 반환
    // isNaN으로 숫자인지 판별 가능
    // 문자열에 e가 포함되면 숫자로 인식할 수 있음.
    // return [4,6].includes(s.length) && !!(Math.max(...s) + 1 )
    return [4,6].includes(s.length) && s.split('').every(v=>!isNaN(v))
}