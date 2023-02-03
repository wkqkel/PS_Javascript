const alphabet = 'abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'  + 'abcdefghijklmnopqrstuvwxyz'
function solution(s, skip, index) {
   let ans = ''
   for(let x of s){
       const startIdx = alphabet.indexOf(x)
       let lastIdx = startIdx + index
       for(let i=startIdx; i<= lastIdx; i++){
           if(skip.includes(alphabet[i])) lastIdx++
       }
       ans += alphabet[lastIdx]
   }
    return ans
}