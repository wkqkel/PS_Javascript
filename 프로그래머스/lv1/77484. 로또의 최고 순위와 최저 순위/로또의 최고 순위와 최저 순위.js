function solution(lottos, win_nums) {
   const arr = [];
   const bonus = lottos.filter(v=>!v).length
   for(let x of lottos){
       if(win_nums.includes(x)){
           arr.push(x)
       }
   }
   const max = arr.length + bonus
   const min = arr.length
   const rankMap = [6, 6, 5, 4, 3, 2, 1]
   return [rankMap[max], rankMap[min]]
}