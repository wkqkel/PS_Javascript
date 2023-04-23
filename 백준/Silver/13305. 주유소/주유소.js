const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[0];
const roadArr = [0, ...input[1].split(' ').map(Number)];
const priceArr = input[2].split(' ').map(Number);

let res = 0
// 앞에 더 싼게 존재하면, 거기서 사고옴.
// 또는
// 뒤에 더싼게 나올떄까지, 거기까지는 최소한만 충전

for(let i=0; i<priceArr.length; i++){
  const curPrice = priceArr[i];
  const hasMoreCheapIndex = priceArr.slice(1,-1).findIndex(v=>v<curPrice) + 1

  if(hasMoreCheapIndex > 0) {
    res += roadArr[i+1] * curPrice
    continue;
  }
  res += roadArr.slice(i+1).reduce((a,b)=>a+b) * curPrice
  return console.log(res)
}