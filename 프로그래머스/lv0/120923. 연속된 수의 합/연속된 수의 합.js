function solution(num, total) {
    
       
    let left = 1;
    let right = num
    let sum = num*(num+1) / 2
  
    while(sum!==total){
       sum = sum<=total 
           ? sum - left++ + ++right 
           : sum + --left - right--
    }
    return Array(right - left + 1).fill(left).map((v,i)=>v+i)
}