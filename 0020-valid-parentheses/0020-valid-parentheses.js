/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const res = [];
   const op = {
      ')' : '(',
      ']' : '[',
      '}' : '{'
   }

   for(let i=0; i<s.length; i++){
      if(Object.keys(op).includes(s[i])){
         if(res.pop() !== op[s[i]]){
            return false
         }
      } else {
          res.push(s[i])
      }
   }
   
   return !res.length
};