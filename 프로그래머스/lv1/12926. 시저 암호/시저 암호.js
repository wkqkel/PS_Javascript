
function solution(s, n) {
  function pushBack(v, n){
     if(v===' ') return ' '
     const idx = (alphabet.indexOf(v.toLowerCase()) + n) % alphabet.length
     if(v===v.toUpperCase()) return alphabet[idx].toUpperCase()
     return alphabet[idx]
  }

   return [...s].map(v=> pushBack(v, n)).join('')
       
       
 
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
