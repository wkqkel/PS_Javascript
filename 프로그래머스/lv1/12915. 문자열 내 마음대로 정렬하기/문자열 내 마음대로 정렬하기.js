function solution(strings, n) {
    // localeCompare 
    // referenceStr.localeCompare(compareString[, locales[, options]])
    // referenceStr이 compareString보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0 반환
    // 'a'.localeCompare('b') // -1 , 
    // sort((s1,s2)=> s1.localeCompare(s2)) === sort()
    return strings.sort((s1, s2)=> s1[n]=== s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]))
}