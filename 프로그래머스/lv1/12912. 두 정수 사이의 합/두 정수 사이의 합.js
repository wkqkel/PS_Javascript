function solution(a, b) {
  // [a,b] = [a,b].sort((a,b)=> a-b)
  // return Array(b-a+1).fill(a).map((v,i)=>v+i).reduce((acc,cur)=> acc+cur,0)
  
  // 가우스 수열의 합: 1-10까지의 합은 (1+10) * (10-1+1) / 2 = 55
  return (a+b) * (Math.abs(a-b)+1) / 2
}