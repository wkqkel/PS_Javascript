function solution(n) {
 return Array.from(Array(n), (_,i)=>i+1).filter(item=> item % 2)
}