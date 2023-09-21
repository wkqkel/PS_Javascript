/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    return Array(n).fill(0).reduce((acc,cur,idx)=>{
        const val = (idx % 7) + 1 + (Math.floor(idx / 7 ))
        return acc + val
    },0)
};