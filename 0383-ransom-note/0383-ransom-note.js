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
    for (let x of ransomNote) {
        const prev = magazine
        magazine = magazine.replace(x, '')
        if (prev === magazine) return false
    }
    return true
    // const ransomNoteMap = makeMap(ransomNote)
    // const magazineMap = makeMap(magazine)

    // return Object.keys(ransomNoteMap)
    //     .every(key => ransomNoteMap[key] <= magazineMap[key])
};