// 총 비용을 기준으로 정렬

// 모든 경우가 뭔지 생각해내는 것이 블루투포스를 잘하는 것

function solution(m, product) {
  let max = 0;
  let n = product.length;
  // 정렬을 해주지않으면 특정 할인에서 비싼 걸 먼저 사서, 작은 걸 몇개 사는걸 못할 수 있음.
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let rest = m;
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      const price =
        (i === j ? product[j][0] / 2 : product[j][0]) + product[j][1];
      if (rest - price >= 0) {
        rest -= price;
        cnt++;
      }
    }
    max = Math.max(max, cnt);
  }
  return max;
}

// function solution(m, product) {
//   let answer = 0;
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < n; i++) {
//     // 할인된거 먼저 사서 빼줌.
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(cnt, answer);
//   }
//   return answer;
// }

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
