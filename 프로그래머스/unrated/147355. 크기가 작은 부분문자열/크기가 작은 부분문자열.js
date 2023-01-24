function solution(t, p) {
  // let ans = 0;
  // let j = p.length
  // for(let i=0; j<=t.length; i++, j++){
  //   if(+t.slice(i,j) <= +p) ans++ 
  // }
  // return ans
    
  let ans = 0;
  for(let i=0; i<= t.length-p.length; i++){
    if(+t.slice(i, i + p.length) <= +p) ans++ 
  }
  return ans
}