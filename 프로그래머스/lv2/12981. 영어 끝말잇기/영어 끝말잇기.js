const isFail = (words, i) => {
    if(i===0) return false;
    const [prev, curr] = [words[i-1], words[i]]
    return (prev[prev.length -1]!==curr[0] ||
            words.slice(0,i).includes(curr) ||
            curr.length === 1)
 }
     
function solution(n, words) {
     for(let i=0; i<words.length; i++){
         if(isFail(words, i)) return [(i+1)%n || n, Math.ceil((i+1) / n)]
     }

     return [0,0]
}