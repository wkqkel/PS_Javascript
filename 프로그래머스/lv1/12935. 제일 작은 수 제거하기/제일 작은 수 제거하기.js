function solution(arr) {
 const filtered = arr.filter(v => v !== Math.min(...arr)) 
 return filtered.length ? filtered : [-1]
}