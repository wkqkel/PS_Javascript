/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
   const arr = Array(right - left + 1).fill(left).map((v,i)=> v+i);
   const isSelfDividingNumber = (v) => [...v.toString()].every(digit=> v % digit === 0);
   return arr.filter(isSelfDividingNumber);
};