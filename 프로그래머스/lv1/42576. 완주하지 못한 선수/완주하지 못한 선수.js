function solution(participant, completion) {
  // participant.sort()
  // completion.sort()
  // for(let i=0; i<participant.length; i++){
  //   if(participant[i]!==completion[i]) return participant[i];
  // }
 return participant.find((v)=>!completion[v]--, 
                 completion.map(v=>completion[v] = (completion[v] | 0)+1 ))
}