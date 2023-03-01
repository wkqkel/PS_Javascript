function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  const reverse = (v) => +[...String(v)].reduce((acc, cur) => cur + acc, "");
  const reverseArr = arr.map(reverse);
  return reverseArr.filter(isPrime);
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
