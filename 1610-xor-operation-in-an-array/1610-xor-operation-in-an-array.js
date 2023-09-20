/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    return Array(n).fill(0).map((v,i)=> start + 2* i).reduce((acc,cur)=> acc^cur)
};