/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = (compare) => {
        if(val === compare) {
            return true
        } else {
            throw "Not Equal"
        }
    }
    const notToBe = (compare) => {
          if(val !== compare) {
            return true
        } else {
             throw "Equal"
        }
    }
    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */