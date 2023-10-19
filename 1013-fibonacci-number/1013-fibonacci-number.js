
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <=1) {
        return Math.max(n,0)
    } else {
        return fib(n-1) + fib(n-2);
    }
}