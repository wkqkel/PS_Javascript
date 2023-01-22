function solution(n, arr1, arr2) {
  function makeBinaryArr(arr) {
     return arr.map((v,i)=> {
         const _v = v.toString(2);
         return '0'.repeat(n - _v.length) + _v
    })  
  }
  [arr1, arr2] =  [makeBinaryArr(arr1),makeBinaryArr(arr2)]
  const arr = arr1.map((v,i)=> [...v].map((v,j)=> +v || +arr2[i][j]).join(''))
  const MAP = [' ', '#']
  return  arr.map((v)=> [...v].map((v)=> MAP[v]).join(''))
}