function solution(num) {
  let count = 0;
  const collatz = (n) => {
     if(n===1) return count;
     count++
     return collatz(n % 2 ? n * 3 + 1 : n / 2)
  }
  return collatz(num) > 500 ? -1 : count
}