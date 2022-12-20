function solution(array, n) {
   const sorted = [...array].sort((a,b)=> a-b);
   const absArray = sorted.map(((item)=> Math.abs(n - item)))
   const min = Math.min(...absArray)
   return sorted[absArray.indexOf(min)];
}