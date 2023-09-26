/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let res = s
    const isTwoAdjacentViceVersa = (s) => {
        for (let i = 0; i < s.length; i++) {
            if ((s[i - 1] || "").toLowerCase() === s[i].toLowerCase() && (s[i - 1] || '').charCodeAt() !== s[i].charCodeAt()) {
                res = [...s].slice(0, i - 1).join('') + [...s].slice(i + 1).join('');
                return true
            }
        }
        return false
    }

    while (isTwoAdjacentViceVersa(res)) { }
    return res
};