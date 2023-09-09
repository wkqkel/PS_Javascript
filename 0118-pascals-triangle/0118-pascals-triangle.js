/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //  [
    //   [1],
    //   [1,1],
    //   [1,2,1],
    //   [1,3,3,1],
    //   [1,4,6,4,1]
    //  ]

    // arr[2][1] = arr[1][0] + arr[1][1] || 1
    const arr = [];
    for(let i = 0; i< numRows; i++) {
        arr.push([1])
        for(let j = 0; j <= i; j++) {
            if(!arr[i-1]) continue;
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j] || 1
        }
    }
    return arr
};