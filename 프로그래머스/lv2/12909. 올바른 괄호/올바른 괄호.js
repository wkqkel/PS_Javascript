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
   
//     return ![...s].reduce((acc,cur,idx,arr)=> {
//                 if(acc<0) return arr.splice(1)
//                 return acc = cur === '(' ? acc + 1 : acc - 1
//             },0) 
} 