let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let origin = input[1].split(' ').map(Number)
let m = +input[2]

let sumValue = 0;
let prefixSum = [0];
for (let x of origin) {
  sumValue += x;
  prefixSum.push(sumValue);
}

let res = ''
for(let i=3; i<3+m; i++) {
 const [left, right] = input[i].split(' ')
 res+= prefixSum[right] - prefixSum[left-1] +'\n'
} 

console.log(res.trim())