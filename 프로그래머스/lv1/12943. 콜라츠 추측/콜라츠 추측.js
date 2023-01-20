// function solution(num) {
//   let count = 0;
//   const collatz = (n) => {
//      if(n===1) return count;
//      count++
//      return collatz(n % 2 ? n * 3 + 1 : n / 2)
//   }
//   return collatz(num) > 500 ? -1 : count
// }

// 문제 자체를 collatz로 만들어서 바로 Return 할 수 있게끔.
function solution(n, count = 0) {
  return  n === 1 
      ? (count> 500? -1: count) 
      : solution(n % 2 ? n * 3 + 1 : n / 2, ++count)
}