function solution(citations) {
    // 논문들의 인용된 횟수가 h이상을 만족하는 논문수 h의 최댓값
    // 최대 논문수는 citations.length
    // 최대논문수에서 하나씩 빼가면서 
    // citations.filter((v)=>v>=h).length 는 인용된 횟수가 h이상인 논문의 갯수 가
    // 논문수 이상이면 해당 논문수가 정답
    
    // for(let h=citations.length; h>=0; h--){
    //   if(h <= citations.filter((v)=>v>=h).length) return h
    // }
    return citations.sort((a, b) => b-a).filter((v,i)=> v>=i+1).length
}

// https://velog.io/@numerok/프로그래머스-H-Index-자바스크립트
// 쉬운 설명 참고
// 6 5 3 1 0
// 1 2 3 4 5