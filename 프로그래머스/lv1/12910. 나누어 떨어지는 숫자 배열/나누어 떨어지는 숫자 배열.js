function solution(arr, divisor) {
  return arr.filter(v=> v%divisor===0).length 
         ? arr.filter(v=> v%divisor===0).sort((a,b)=> a-b)
         : [-1]
}