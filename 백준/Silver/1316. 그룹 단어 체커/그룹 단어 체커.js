const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const rest = input.slice(1)

function checkIsGroupWord(word) {
  const set = [...new Set(word)]
  const removedInARow = [...word].filter((v,i,list) =>list[i-1]!== list[i]);
  return set.length === removedInARow.length
}
const res = rest.filter(checkIsGroupWord).length
console.log(res)