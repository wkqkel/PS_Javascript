function solution(n, arr1, arr2) {
  // 방법1 0.23ms
  // function makeBinaryArr(arr) {
  //   return arr.map((v,i)=> '0'.repeat(n - v.toString(2).length) + v.toString(2))
  // }
  // [arr1, arr2] =  [makeBinaryArr(arr1),makeBinaryArr(arr2)]
  // return arr1.map((v,i)=> [...v].map((v,j)=> MAP[+v || +arr2[i][j]]).join(''))


  // 방법2 0.17ms
  // function addZero(n, s) { return '0'.repeat(n - s.length) + s; }
  // return arr1.map((v,i)=> addZero(n,(v | arr2[i]).toString(2))
  //                 .replace(/1|0/g, v=>MAP[v]))
    
    
  // 방법3
  const ans = [];
  for(let i = 0; i < n; i++){
      const res = arr1[i] | arr2[i];
      const bit = res.toString(2);
      const blankStr = " ".repeat(n - bit.length)
     
      // const bitStr = bit.replaceAll('1', '#').replaceAll('0', ' ')  // 0.6ms
      const bitStr = bit.replace(/1/gi, '#').replace(/0/gi, ' ') // 0.23ms
      ans.push(blankStr + bitStr)
  }
  return ans
}           

const MAP = [' ', '#']