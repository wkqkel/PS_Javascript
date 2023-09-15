/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return  [...x.toString()].reverse().join('') == x
};