function solution(n, k, cards) {
  const arr = [];
  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      for (let z = y + 1; z < n; z++) {
        arr.push(cards[x] + cards[y] + cards[z]);
      }
    }
  }
  return [...new Set(arr.sort((a, b) => b - a))][k - 1];
}

// function getCombination(arr, n) {
//   if (n === 1) return arr.map((v) => [v]);
//   const results = [];
//   arr.forEach((fixed, idx, origin) => {
//     const rest = origin.slice(idx + 1);
//     const combines = getCombination(rest, n - 1);
//     const attached = combines.map((v) => [fixed, ...v]);
//     results.push(...attached);
//   });
//   return results;
// }

// function solution(n, k, cards) {
//   const sum = (v) => v.reduce((acc, cur) => acc + cur, 0);
//   return getCombination(cards, k)
//     .map(sum)
//     .sort((a, b) => b - a)[k - 1];
// }

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
