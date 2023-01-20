function solution(a, b) {
  [a,b] = [a,b].sort((a,b)=> a-b)
  return Array(b-a+1).fill(a).map((v,i)=>v+i).reduce((acc,cur)=> acc+cur,0)
}