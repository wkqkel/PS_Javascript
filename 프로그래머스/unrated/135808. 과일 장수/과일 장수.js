function solution(k, m, score) {
    score.sort((a,b)=> a-b)
    score.splice(0, score.length % m)
    return score.filter((v,i)=> i % m===0)
                .reduce((acc,cur)=> acc + (cur * m),0)
}