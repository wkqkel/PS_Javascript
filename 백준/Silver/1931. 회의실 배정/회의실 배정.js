const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0];
const arr  = [...input].slice(1).map(v=> v.split(' ').map(Number)).sort((a,b)=>{
    if(a[1] != b[1]) return a[1]-b[1]
    return a[0] - b[0]
})
let cnt = 1, cur = 0;
for(let i=1; i<n;i++){
  if(arr[cur][1]  <= arr[i][0]) {
      cur = i;
      cnt++
  }
}
console.log(cnt)