function solution(s) {
  return s
           .split(' ')
           .map((item)=> [...item].map((v,i)=> i%2 ? v.toLowerCase(): v.toUpperCase()).join('')).join(' ')
}
