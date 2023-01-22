
function solution(s, n) {
//   function pushBack(v, n){
//      if(v===' ') return ' '
//      const idx = (alphabet.indexOf(v.toLowerCase()) + n) % alphabet.length
//      if(v===v.toUpperCase()) return alphabet[idx].toUpperCase()
//      return alphabet[idx]
//   }

//    return [...s].map(v=> pushBack(v, n)).join('')
    
    const alphabets = alphabet + alphabet;
    const space = '                                        '; 
    // 공백 최대 25만큼 밀릴 수 있음
    const clever = alphabets + alphabets.toUpperCase() + space
    return [...s].map(v=> clever[clever.indexOf(v) + n]).join('')
}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
