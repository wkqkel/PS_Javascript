
/** 
- BOS 9095: 1,2,3더하기

1. 테이블 정의하기
D[i] = i를 1,2,3의 합으로 나타내는 방법의 수

2. 점화식 찾기

D[4] = ?
1+1+1(+1), 3(+1), 2+1(+1), 1+2(+1) (3을 1,2,3의 합으로 나타내는 방법)+1, D[3]
1+1(+2), 2(+2) (2를 1,2,3의 합으로 나타내는 방법)+2, D[2]
1(+3) (1을 1,2,3의 합으로 나타내는 방법) +3, D[1]

D[4] = D[1] + D[2] + D[3]
D[i] = D[i-1] + D[i-2] + D[i-3]

3. 초기값 정하기
D[1] = 1, D[2] = 2, D[3] = 4

D[i] = D[i-1] + D[i-2] + D[i-3]이니 초기값이 최소 3개는 주어져야함
*/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').slice(1);

const d = [];
d[1] = 1;
d[2] = 2;
d[3] = 4;

for(let i = 4; i < 11; i++) {
  d[i] = d[i-1] + d[i-2] + d[i-3];
}

for(const x of input) {
  console.log(d[x])
}

