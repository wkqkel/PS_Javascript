function solution(n) {
 // 1 2 3
 // 1 2 3 4 5 => 6
    const half = Math.floor(n / 2) // 변수명 N => half
   return half * (half + 1)
}