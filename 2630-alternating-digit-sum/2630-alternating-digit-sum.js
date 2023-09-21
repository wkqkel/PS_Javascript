/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return String(n).split('').reduce((acc,cur,idx)=>{
        if(idx % 2 === 0) return acc + +cur;
        return acc - +cur;
    },0)
};