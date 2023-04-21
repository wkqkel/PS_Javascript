const fs = require('fs');
const [testCase, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let line = 0;

for(let tc = 0; tc<testCase; tc++){
  let n = +input[line];
  let test = [];
  for(let i = line +1; i <= line + n; i++){
    let data = input[i].split(' ').map(Number);
    test.push(data)
  }
  test.sort((a,b)=> a[0]-b[0]);
  let count = 0
  let minValue = Number.MAX_SAFE_INTEGER;
  for(let [a,b] of test) {
    if(+b < +minValue) {
      minValue = +b
      count++
    }
  }
  console.log(count)
  line += n+1
}
// test: [ [3,2], [1,4], [4,1], [2,3], [5,5] ],

