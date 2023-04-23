const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[0];
const arr  = [...input].slice(1).map(v=> v.split(' ').map(Number)).sort((a,b)=>{
    if(a[1] != b[1]) return a[1]-b[1]
    return a[0] - b[0]
})
const res = []
for(let i=0; i<arr.length;i++){
  if(i===0 || res.at(-1)[1]  <= arr[i][0]) {
      res.push(arr[i])
  }
}
console.log(res.length)