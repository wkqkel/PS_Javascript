function solution(n, k, cards) {
  const set = new Set();
  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      for (let z = y + 1; z < n; z++) {
        set.add(cards[x] + cards[y] + cards[z]);
      }
    }
  }
  return [...set].sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
