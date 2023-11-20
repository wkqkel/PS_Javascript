/** 
1. 아이디어
- cnt를 변수
- 리스트 받은 것을 q
- while문 q가 빌 때까지
  - canPrint 체크해서 뒤에 있는지 체크
  - canPrint면 res[idx] = cnt 등록, q.shift()
  - 아니면 q.push(q.shift())
- res[target] 출력
2. 시간복잡도
- 이중포문 - 시간복잡도 O(n^2) = 100 * 100
- 테스트케이스 수 
3. 자료구조
- cnt: 출력된 번째 = 0 : int
- q: 현재 큐를 나타낸 배열
- canPrint: 출력 가능 여부 : bool
- res: 출력순서를 담은 배열
*/

class Queue {
  res = [];
  cnt = 1;
  
  constructor(n,t,q){
    this.n = n;
    this.t = t;
    this.q = q.map((v,i)=>({v,i}));
  }

  print() {
    while(this.q.length){
      const f = this.q.shift()
      const isRelocation = this.q.some(v=> v.v > f.v)
      if(isRelocation) {
         this.q.push(f)
      } else {
         this.res[f.i] = this.cnt++
      }
    }
    return this.res[this.t]
  }
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const tc = [];
for(let i = 1; i < input.length; i+=2) {
  const [n,t] = input[i].split(' ').map(Number)
  const q = input[i + 1].split(' ').map(Number)
  tc.push([n,t,q])
}

for(let i = 0; i < tc.length; i++) {
  console.log(new Queue(...tc[i]).print())
}