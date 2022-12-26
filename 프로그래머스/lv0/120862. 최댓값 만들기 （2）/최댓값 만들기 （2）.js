function solution(numbers) {
  const positiveArr= [...numbers].sort((a,b)=> b-a);
  const negativeArr = [...numbers].filter(v=>v<0).sort((a,b)=> a-b);
    
  return Math.max(positiveArr[0]*positiveArr[1],
                  (negativeArr[0]*negativeArr[1])|| Number.MIN_SAFE_INTEGER )
}