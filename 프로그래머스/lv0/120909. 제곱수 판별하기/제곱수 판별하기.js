function solution(n) {
   //  const sqrt = Math.sqrt(n)
   // return !(sqrt === Math.floor(sqrt)) + 1
    return !Number.isInteger(Math.sqrt(n)) + 1
}