function solution(x) {
 return x % [...(x+'')].reduce((acc,cur)=> acc+ +cur, 0) === 0
}