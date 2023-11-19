/**
1. 아이디어
- while문으로, 특정조건 종료될때까지 반복
- 4방향을 for문으로 탐색
- 더이상 탐색 불가능할 경우, 뒤로 한칸 후진
- 후진이 불가능하면 종료

2. 시간복잡도
- O(NM) : 50^2 = 2500 < 2억
- 가능

3. 자료구조
- map : int[][]
- 로봇청소기 위치, 방향, 전체 청소한 곳 수
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);
let [y,x,d] = input[1].split(' ').map(Number);
const map = input.slice(2).map(v=>v.split(' ').map(Number));

let cnt = 0;

const dy = [-1,0,1,0]
const dx = [0,1,0,-1]

while(true) {
  // 청소가 안돼있는 경우에만
  if(map[y][x]===0) {
    // 1.현재위치를 청소한다.
    map[y][x] = 2; 
    cnt++;
  } 
  let sw = false;

  // 2.현재위치에서 왼쪽방향부터 차례대로 인접한 칸을 탐색한다.
  // 4방향 탐색
  for(let i=1; i < 5; i++){
    // 내가 다음에 바라보는 곳을 ny
    // 현재위치가 y
    // 현재 바라보고 있는 곳에서 i를 빼줌
    const nd = (d - i + 4) % 4;
    const ny = y + dy[nd];
    const nx = x + dx[nd];
    // 청소하지않은 공간이 존재한다면
    // 여기서 문제: 이차원 배열에서 방향벡터로 다음것을 탐색할때는 좌표가 현재의 지도안에 들어오는 지를 항상 확인해야함.
    if(0<=ny&&ny<N && 0<=nx && nx < M) {
      if(map[ny][nx] === 0){
        // 그 방향으로 회전한 다음 한칸을 전진하고 1번부터 진행
        d = nd// 회전
        y = ny;
        x = nx;
        sw = true;
        break; // for문을 끝냄.
      }
    }
  }
  // 4방향 모두 있지않은 경우
  // 근데 이게 위에서 포문에서 브레이크를 타면 여기로 오면 안되기때문에 sw변수 필요 - 청소를 하지않은 경우에만 들어와야함
  if(sw == false) {
    // 뒤쪽방향이 막혀있는지 확인
    const ny = y - dy[d]
    // y에서 현재 내가 바라보고있는 방향으로 해서 한칸을 뒤로감
    const nx = x - dx[d]
     if(0<=ny&&ny<N && 0<=nx && nx < M) {
       if(map[ny][nx] === 1) {
         break; // while문 종료
       } else {
         // 뒤로 한칸 후진
         y = ny
         x = nx 
       }
     } else {
       break;
     }
  }
}

console.log(cnt)