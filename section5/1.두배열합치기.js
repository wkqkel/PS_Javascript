function solution(a, b) {
  const ans = [];
  const n = Math.min(a.length, b.length);
  let j = 0;
  for (let i = 0; i < n; ) {
    if (a[i] < b[j]) {
      ans.push(a[i++]);
    }
    if (a[i] >= b[j]) {
      ans.push(b[j++]);
    }
  }
  const maxArr = a.length === n ? b : a;
  return [...ans, ...maxArr.slice(j)];
}

// two pointers_ p1,p2
// function solution(a, b) {
//   const ans = [];
//   const [n, m] = [a.length, b.length];
//   let p1 = (p2 = 0);
//   while (p1 < n && p2 < m) {
//     if (a[p1] <= b[p2]) ans.push(a[p1++]);
//     else ans.push(b[p2++]);
//   }
//   while (p1 < n) ans.push(a[p1++]);
//   while (p2 < m) ans.push(b[p2++]);

//   return ans;
// }

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
