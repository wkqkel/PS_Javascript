function solution(numbers, k) {
  return  (k + (k -1)) % numbers.length
}
// 2 -> 3
// 3 -> 5
// 5-> 9