function solution(strings, n) {
    // localeCompare 
    // referenceStr.localeCompare(compareString[, locales[, options]])
    // referenceStr이 compareString보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0 반환
    // 'a'.localeCompare('b') // -1 , 
    // sort((s1,s2)=> s1.localeCompare(s2)) === sort()
    return strings.sort((s1, s2)=> s1[n]=== s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]))
    // 같은 문자열이 여럿 일 경우, (첫글자부터) 사전순으로 앞선 문자열이 앞쪽에 위치함(괄호 주의)
}