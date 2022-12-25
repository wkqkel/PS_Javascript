function solution(array) {
   // return [...array.join('')].filter(v=> v==='7').length
    return array.join('').split('7').length - 1
}