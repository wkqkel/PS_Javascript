const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

let count = input[0];
const array = [];

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(" ");
  array.push([+x, +y]);
}

array.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

console.log(array.join('\n').replaceAll(',', ' '))
