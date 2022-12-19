function factorial(n){
    if(n<=1) return 1;
    return n * factorial(n-1)
}
function solution(n) {
   // 3628800 === factorial(10)

  for(let i=1; i<=11; i++){
      if(factorial(i)>n) return i-1
  }
  
    
}