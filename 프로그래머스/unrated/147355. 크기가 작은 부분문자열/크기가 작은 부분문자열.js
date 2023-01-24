function solution(t, p) {
  let ans = 0;
  let j = p.length
  for(let i=0; j<=t.length; i++, j++){
    if(+t.slice(i,j) <= +p) ans++ 
  }
  return ans
 
  // 위에껀 0.05ms 아래껀 0.12ms로 두배 오래걸림.
  // 연산을 더 많이 해줘서 그런가봄.
  // let ans = 0;
  // for(let i=0; i<= t.length-p.length; i++){
  //   if(+t.slice(i, i + p.length) <= +p) ans++ 
  // }
  // return ans
}