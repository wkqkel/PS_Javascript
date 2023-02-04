function solution(n, lost, reserve) {
  const arr = Array(n).fill(true).map((v,i)=> !lost.includes(i+1) || reserve.includes(i+1));
  const canArr = Array(n).fill(true).map((v,i)=> reserve.includes(i+1) && !lost.includes(i+1))

  for(let i=0; i<n; i++){
      if(!arr[i]) {
          if(canArr[i-1] || canArr[i+1]) {
              const idx = canArr[i-1] ? i - 1 : i + 1;
              canArr[idx] = false;
              arr[i] = true;
          }
      }
  }
  return arr.filter(Boolean).length
}
