function solution(s) {
   const stack = []
   for(let x of s){
       if(stack.at(-1) === x) stack.pop()
       else stack.push(x)
   }
   return stack.length === 0 ? 1 : 0
}
    


