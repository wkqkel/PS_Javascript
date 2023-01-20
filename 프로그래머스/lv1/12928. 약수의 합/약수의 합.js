function solution(n) {
  return Array(n).fill(1).map((v,i)=> v+i)
         .filter(v=> n % v === 0)
         .reduce((acc,cur)=> acc+cur,0)
}