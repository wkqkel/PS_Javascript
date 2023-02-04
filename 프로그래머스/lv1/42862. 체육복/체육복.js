function solution(n, lost, reserve) {
  const arr = Array(n).fill(true).map((v,i)=> !lost.includes(i+1) || reserve.includes(i+1));
  const canArr = Array(n).fill(true).map((v,i)=> reserve.includes(i+1) && !lost.includes(i+1));
  // if 기준을 arr이 없으므로 줄 수 있는 애한테 받는 식으로 해야함.
  for(let i=0; i<n; i++){
      if(!arr[i] && (canArr[i-1] || canArr[i+1])) {
          const idx = canArr[i-1] ? i - 1 : i + 1;
          canArr[idx] = false;
          arr[i] = true;
      }
  }
  return arr.filter(Boolean).length;
}
