function solution(array, n) {
   const sorted = [...array].sort((a,b)=> a-b);
   const minDiffArray = sorted.map(((item)=> Math.abs(n - item)))
   const minDiff = Math.min(...minDiffArray)
   return sorted[minDiffArray.indexOf(minDiff)];
}