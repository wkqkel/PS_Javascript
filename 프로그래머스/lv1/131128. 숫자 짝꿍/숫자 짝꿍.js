function solution(X, Y) {
  // 두개의 교집합을 만들자 없으면 리턴 -1하자
    // 교집합 어떻게? ㅎ
  const arr = [];
  const yMap = new Map();

  for (let y of Y) {
      yMap.set(y, (yMap.get(y) || 0) + 1);
  }
    
  for (let x of X) {
      if(yMap.has(x)){ 
          arr.push(x);
          yMap.set(x, yMap.get(x) - 1);
          if(yMap.get(x) === 0) yMap.delete(x);
      }
  }
    
  if(arr.length === 0) return '-1'
  if(arr[0] === '0') return '0';
  return arr.sort().reverse().join('')
  


}