function solution(n, words) {
 const isFail = (words, i) => {
    if(i===0) return false;
    if(words[i-1][words[i-1].length -1]!==words[i][0]) return true;
    if(words.slice(0,i).includes(words[i])) return true;
    if(words[i].length === 1) return true;
    return false;
 }
 for(let i=0; i<words.length; i++){
     if(isFail(words, i)) return [(i+1)%n|| n,Math.ceil((i+1) / n)]
 }
 return [0,0]
}