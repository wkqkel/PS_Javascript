/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let n = 1;
    let sum = 0;
    while(n <= arr.length) {
        for(let i = 0; i+n <= arr.length; i++) {
           sum += arr.slice(i , i+n).reduce((a,b)=> a+b,0);
        }
        n+=2;
    }
    return sum
};