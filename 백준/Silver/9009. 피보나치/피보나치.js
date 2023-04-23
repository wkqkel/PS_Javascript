const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const arr = [...input].slice(1).map(Number)

const 피보나치 = [0,1]

while(피보나치.at(-1) <= Math.max(...arr)) {
   피보나치[피보나치.length] = 피보나치[피보나치.length-1] + 피보나치[피보나치.length-2]
}

let res = ""
for(let x of arr) {
  let temp = ''
  let rest = x;
  while(rest > 0){
    const findIdx = 피보나치.findIndex(v=> v>rest)
    rest -= 피보나치[findIdx-1]
    temp = 피보나치[findIdx-1] + " " + temp
  }
  res += temp + '\n'
}
console.log(res.trim())