/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const sorted = [...String(num)].sort((a,b)=> a-b);
    const num1 = sorted[0] + sorted[2]
    const num2 = sorted[1] + sorted[3]
    return +num1 + +num2

};