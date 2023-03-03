function solution(n, arr) {
  const sumArr = arr.map((v) =>
    [...String(v)].reduce((acc, cur) => acc + +cur, 0)
  );
  const isSumMax = (v, i) => Math.max(...sumArr) === sumArr[i];
  return Math.max(...arr.filter(isSumMax));
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
