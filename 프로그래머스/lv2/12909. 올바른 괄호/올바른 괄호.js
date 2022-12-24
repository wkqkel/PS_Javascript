function solution(s){
    const stack = [];
    if(s.length % 2 !==0) return false;
    for (let x of s){
       if(x==="(") {
           stack.push(x);
       } else {
           if(stack.pop() !== '(') return false
       }
       
    }
    
    return !stack.length 
} 