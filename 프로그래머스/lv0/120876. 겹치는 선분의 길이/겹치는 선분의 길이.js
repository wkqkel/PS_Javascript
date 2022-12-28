function solution(lines) {
  // const ans = new Array(200).fill(0);
  // lines.forEach(([a, b]) => {
  //       for(a;a<b;a++)ans[a+100]+=1
  // });
  // return ans.filter(el=>el>1).length;
  let ans = {}
  lines.forEach(([a,b])=>{
      for(a; a<b; a++) ans[a] = (ans[a]||0) +1; // a<b주의
  })
  return Object.values(ans).filter(el=>el>1).length;
}