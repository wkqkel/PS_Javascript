function solution(score) {
  const avrScoreArr = score.map(([eng,math])=> (eng+math)/2)
  const sortedAvrScoreArr = [...avrScoreArr].sort((a,b)=> b-a)
  return avrScoreArr.map(v=> sortedAvrScoreArr.indexOf(v)+1)
  
}