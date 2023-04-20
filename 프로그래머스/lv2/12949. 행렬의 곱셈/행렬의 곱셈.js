// https://mathbang.net/562#gsc.tab=0
function solution(arr1, arr2) {
    const [m, k, n] = [arr1.length, arr1[0].length, arr2[0].length];
    const arr = [];
    for(let i=0; i<m; i++) {
      arr[i] = []
      for(let j=0; j<n; j++){
          for(let x=0; x<k; x++){
            arr[i][j] =  (arr[i][j] ||0)  + (arr1[i][x] * arr2[x][j])
          }
      }
    }
    return arr
}
 
   // const arr = []
   //   for(let i =0; i<arr1.length; i++){
   //      arr[i] = []
   //      for(let j=0; j<arr2[i].length; j++){
   //        for(let k=0; k<arr1[i].length; k++){
   //          arr[i][j] =  (arr[i][j] ||0)  + (arr1[i][k] * arr2[k][j])
   //        }
   //      }
   //  }
   // return arr
// [[1, 4],
//  [3, 2],
//  [4, 1]]

// [[3, 3], 
//  [3, 3]]


// [[2, 3, 2], 
//  [4, 2, 4], 
//  [3, 1, 4]]


// [[5, 4, 3], 
//  [2, 4, 1], 
//  [3, 1, 1]]

// [[22, 22, 11], 
//  [36, 28, 18], 
//  [29, 20, 14]]



