function solution(k, tangerine) {
  const map = new Map()
  tangerine.forEach((v,i)=> map.set(v, (map.get(v)|0) + 1))
  const sorted = [...map].sort((a,b)=> b[1]-a[1])
  for(let i=0; i<sorted.length; i++){
      k -= sorted[i][1]
      if(k<=0) return i+1
  }
}