/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reverse = (num) => Number([...String(num)].reverse().join('')) 
    const reversed1 = reverse(num);
    const reversed2 = reverse(reversed1)
    return num === reversed2
};