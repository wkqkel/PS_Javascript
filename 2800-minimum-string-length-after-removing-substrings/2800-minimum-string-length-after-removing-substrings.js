/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {

    while (s.includes("AB") || s.includes("CD")) {
        s = s.replace(/AB|CD/, '')
    }
    return s.length
};