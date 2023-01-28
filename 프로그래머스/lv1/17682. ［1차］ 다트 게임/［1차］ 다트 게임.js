function solution(dartResult) {
   const bonus = ['_', 'S', 'D', 'T']
   const points = []
   let temp = ''
   for(x of dartResult) {
       // x가 숫자이면 temp에 더해줌
      if(!isNaN(x)) temp += x
       // x가 숫자가 아니면 이전 값 계산
      if(bonus.includes(x)) {
         points.push(Math.pow(+temp, bonus.indexOf(x)))
         temp = ''
      }
      if(x=== '#') {
          points[points.length -1] *= -1;
      }
      if(x=== '*') {
          points[points.length -1] *= 2;
          points[points.length -2] *= 2;
      }
   }
   return points.reduce((acc,cur)=> acc+cur, 0)
}