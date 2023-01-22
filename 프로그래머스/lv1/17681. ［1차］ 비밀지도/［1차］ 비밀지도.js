function solution(n, arr1, arr2) {
  // function makeBinaryArr(arr) {
  //   return arr.map((v,i)=> '0'.repeat(n - v.toString(2).length) + v.toString(2))
  // }
  // [arr1, arr2] =  [makeBinaryArr(arr1),makeBinaryArr(arr2)]
  // const arr = arr1.map((v,i)=> [...v].map((v,j)=> +v || +arr2[i][j]).join(''))
  // return  arr.map((v)=> [...v].map((v)=> MAP[v]).join(''))


  function addZero(n, s) { return '0'.repeat(n - s.length) + s; }
  return arr1.map((v,i)=> addZero(n,(v | arr2[i]).toString(2))
                  .replace(/1|0/g, v=>MAP[v]))
}           

const MAP = [' ', '#']