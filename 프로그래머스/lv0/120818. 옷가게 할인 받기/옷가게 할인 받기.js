function solution(price) {
   let saledPrice = price
   if(price >= 500_000) saledPrice *= 0.8
   else if(price >= 300_000) saledPrice *= 0.9
   else if(price >= 100_000) saledPrice *= 0.95
   return Math.floor(saledPrice)
}

