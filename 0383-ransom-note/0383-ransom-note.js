/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const makeMap = (arr) => {
    return [...arr].reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
}
var canConstruct = function (ransomNote, magazine) {
    const ransomNoteMap = makeMap(ransomNote)
    const magazineMap = makeMap(magazine)

    return Object.keys(ransomNoteMap).every(key => ransomNoteMap[key] <= magazineMap[key] || 0)
};