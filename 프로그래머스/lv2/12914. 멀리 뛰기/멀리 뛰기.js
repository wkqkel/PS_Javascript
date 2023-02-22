
function solution(n) {
    let answer = 0, arr = [0, 1];
    for (let a = 2; a <= n + 1; a++) {
      answer = arr[0] + (arr[1] % 1234567);
      arr[0] = arr[1];
      arr[1] = answer;
    }
    return answer % 1234567;
  };