function solution(people, limit) {
   people.sort((a,b)=>b-a)
   let count = 0;
   let right = people.length -1;
   for(let left=0; left<=right; left++){
       if(people[left] + people[right] <= limit ) right--
       count++
   }
   return count
}

// 80 70 50 50
// 