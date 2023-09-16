/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // const arr = Array(n).fill(1).map((v,i)=>v+i)
    // const sum = (arr) => arr.reduce((acc,cur)=> acc+cur)
    // for(let i =0; i<n; i++) {
    //     const sum1 =sum(arr.slice(0, i+1))
    //     const sum2 = sum(arr.slice(i))
    //     if(sum1 === sum2){
    //         return i + 1
    //     }
    // }
    // return -1
    const sum = (1 + n) * n /2;
    let sum1 = 0
    for(let i=1; i<=n; i++) {
       sum1 += i;
       const sum2 = sum - sum1 + i;
       if(sum1 === sum2) {
           return i
       }
    }
    return -1
};