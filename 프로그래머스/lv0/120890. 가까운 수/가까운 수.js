function solution(array, n) {
   const sorted = array.sort((a,b)=> a-b).map(((item)=> Math.abs(n - item)))
   return array[sorted.indexOf(Math.min(...sorted))];
    
   // const sorted = [...array].sort((a,b)=> a-b);
   // const minDiffArray = array.map(((item)=> Math.abs(n - item)))
   // const minDiff = Math.min(...minDiffArray)
   // return sorted[minDiffArray.indexOf(minDiff)];
}