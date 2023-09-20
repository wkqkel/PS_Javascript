/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    // .map((v,i)=> start + 2* i)
    return Array(n).fill(start).reduce((acc,cur,i)=> acc ^ (start + 2 * i))
};