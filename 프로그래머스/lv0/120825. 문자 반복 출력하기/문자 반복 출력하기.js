function solution(my_string, n) {
  return  [...my_string].map(letter=> String(letter).repeat(n)).join('')
}