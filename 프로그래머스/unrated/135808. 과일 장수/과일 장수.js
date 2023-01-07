function solution(k, m, score) {

    return score.sort()
        .filter((v,i)=> (score.length - i) % m === 0)
        .reduce((acc,cur)=> acc + cur ,0) * m
    
    // filter 부분 (score.length - i)는 i를 랭스부터 1씩 빼게 만듬.
    // 이러면 길이가 m에 딱 안떨어질경우, 건너뛰게 되는 현상은 이해했는데,
    // 다음에 이 문제나 다른 문제에서 한번 더 봐야될 듯. (splice는 원본 훼손하니 더 좋음.)
    // 그리고 곱셈도 어차피 각 요소마다 곱해줄거면 다 더해주고 곱해줘도 같음 (연산이 더 적어지니 더 좋음)
    
    // score.sort((a,b)=> a-b)
    // score.splice(0, score.length % m)
    // return score.filter((v,i)=> i % m===0)
    //             .reduce((acc,cur)=> acc + (cur * m),0)
}