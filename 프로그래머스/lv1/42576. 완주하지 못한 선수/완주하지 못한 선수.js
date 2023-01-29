function solution(participant, completion) {
    // participant.find(콜백 애로우 함수, 맵펑션) 이렇게 두개의 argument(전달인자)가 주어진거고, 뒤의 맵펑션이 콜백 전에 실행이 됩니다
   // 맵함수는 기본적으로 새로운 배열을 리턴하는데요, 여기서는 이 '리턴 되는 배열'은 의미가 없습니다.
   // 여기서 중요한건 '후치'라는 겁니다. 즉 값을 불러오고, !을 통해 참거짓 판별을 하고, 그 열의 계산이 다 끝나고 다음 열로 갈 때야 값이 바뀌는거죠. "불러온 순간의 값"으로 참거짓 판별을 한다는 게 중요
    // |말고 || 하면 효율성테스트 통과못함
   return participant.find((v)=>!completion[v]--, 
                 completion.map(v=>completion[v] = (completion[v] | 0)+1 ))
         
    // 이것보다 위의것이 속도도 빠름.
    // participant.sort()
    // completion.sort()
    // for(let i=0; i<participant.length; i++){
    //   if(participant[i]!==completion[i]) return participant[i];
    // }
}