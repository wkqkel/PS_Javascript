/** 
1. 아이디어
- 최대 5번 방향은 1234중에 하나 -> 5번 이동하면 됨 더 작아질일은 없음
- 4진수로 4^5승으로 해서 경우의수 만듬
- 방향에 따라 합쳐주면 로직 작성
- 배열에서 가장 큰 값 출력

2. 시간복잡도
- 4^5 * 5*  (20*20 + 20*20) >> 2억이하
- 경우의수 * 5번 *(배열돌기 + 가장 큰값 출력)

3. 자료구조
- board1: 주어진 보드
- board2: 합쳐질 블록
- dx, dy: 방향에 따른 값
- dirs: 경우의 수 배열
- min: 최솟값
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const n = +input[0];
const board1 = input.slice(1).map(v=>v.trim().split(' ').map(Number));

function udt(arr){
  const q = arr.map(v=>({v,isMerged:false}))
  let cursor = 0;

  while(cursor !== q.length){
    const cur = q[cursor];
    if(cur.v ===0){
      q.splice(cursor, 1)
      q.push({v:0,isMerged:false})
      if(q.slice(cursor).filter(v=>v.v).length ===0) {
        return q.map(v=>v.v)
      }
    } else if(q[cursor-1]?.v===cur.v&& !q[cursor-1]?.isMerged && !cur.isMerged){
      q.splice(cursor-1, 2, ({v:q[cursor-1].v+cur.v,isMerged:true}),({v:0,isMerged:false}));
    } else {
      cursor++
    }
  }

  return q.map(v=>v.v)
}
// console.log(String(udt([0,2,2,0,0])) == String([4,0,0,0,0]))
// console.log(String(udt([0,0,2,0])) == String([2,0,0,0]))
// console.log(String(udt([2,2,0,2])) == String([4,2,0,0]))
// console.log(String(udt([2,4,0,2])) == String([2,4,2,0]))
// console.log(String(udt([2,2,2,2])) == String([4,4,0,0]))
// console.log(String(udt([4,4,8,8])) == String([8,16,0,0]))
let max = 0;

for(let i = 0;i<Math.pow(4,5);i++){
  let board2 = JSON.parse(JSON.stringify(board1));
  let tmp = i;
  for(let i = 0; i<5;i++){

    let dir = tmp % 4;
    tmp = Math.floor(tmp/4);
    if(dir === 0) {
      for(let x = 0; x <n; x++) {
        const arr = []
        for(let y = 0; y<n;y++){ 
          arr.push(board2[y][x])
        }
        const res = udt(arr)
        for(let y = 0; y < n; y++){
          board2[y][x] = res[y]
        }
      }
    }
    if(dir === 1){
      for(let y = 0; y <n; y++) {
        const arr = []
        for(let x = n -1; x>=0;x--){
          arr.push(board2[y][x])
        }
        const res = udt(arr).reverse()
        for(let x = 0; x < n; x++){
          board2[y][x] = res[x]
        }
      }
    }
    if(dir === 2){
      for(let x = 0; x <n; x++) {
        const arr = []
        for(let y = n-1; y>=0;y--){ 
          arr.push(board2[y][x])
        }
        const res = udt(arr).reverse()
        for(let y = 0; y < n; y++){
          board2[y][x] = res[y]
        }
      }
    }
    if(dir === 3){
      for(let y = 0; y <n; y++) {
        const arr = []
        for(let x = 0; x<n;x++){
          arr.push(board2[y][x])
        }
        const res = udt(arr)
        for(let x = 0; x < n; x++){
          board2[y][x] = res[x]
        }
      }
    }
  }
  max = Math.max(max, Math.max(...board2.flat()))
}

console.log(max)