function solution(numbers) {
 return Array(10).fill(0).map((v,i)=> v+i)
      .filter(v=> !numbers.includes(v)).reduce((acc,cur)=> acc+cur,0)
}