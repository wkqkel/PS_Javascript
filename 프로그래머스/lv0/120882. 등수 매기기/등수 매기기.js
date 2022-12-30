function solution(score) {
  // const avrScoreArr = score.map(([eng,math])=> (eng+math)/2)
  // const sortedAvrScoreArr = [...avrScoreArr].sort((a,b)=> b-a)
  // return avrScoreArr.map(v=> sortedAvrScoreArr.indexOf(v)+1)
 return score.map((v1)=> 
          score.filter((v2)=> (v1[0]+v1[1])/2 < (v2[0]+v2[1])/2  ).length + 1)
    
  

}