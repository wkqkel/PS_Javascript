function solution(a, b, n) {
   if(n<2) return 0;
   let left = n
   let take, give
   let ans = 0;
   while(left >= a){
       take = ~~(left / a) * b
       give = take * a / b;
       left = left - give + take
       ans += take
   }
   return ans
}