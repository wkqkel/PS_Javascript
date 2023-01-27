function solution(k, m, score) {
   return score.sort((a,b)=>b-a)
       .reduce((acc,cur,idx)=> (idx+1) % m ? acc : acc + cur * m , 0)
}