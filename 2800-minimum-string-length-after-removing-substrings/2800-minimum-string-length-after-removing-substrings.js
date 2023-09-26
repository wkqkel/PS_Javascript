/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    while (s.match(/AB|CD/)) {
        s = s.replace(/AB|CD/, '')
    }
    return s.length
};