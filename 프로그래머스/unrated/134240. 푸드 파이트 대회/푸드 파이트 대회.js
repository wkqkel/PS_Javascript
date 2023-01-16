function solution(food) {
   let half = ''
   for (let i=1; i< food.length; i++) {
       half += String(i).repeat(food[i]/2) // repeat 자동으로 소수점버림.
   }
   return half + 0 + [...half].reverse().join('')
}