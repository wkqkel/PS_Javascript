/** 
1. 아이디어
- 각각의 cctv는 자신의 좌표, 방향을 가지고있고
- 감시메서드를 가지고있음
  - 감시메서드는 cctv번호에 따라 다른 영역을 탐색
- 회전메서드 방향 +1

2. 시간복잡도

3. 자료구조

*/

const 탐색방향맵 = [null,4,2,4,4,1];
const 탐색범위맵 = {1: [0], 2: [0,2], 3:[3,0],4:[3,0,2],5:[0,1,2,3] }
class CCTV {
  dir = 0;
  monitored = []

  constructor(coord) {
    this.id = map[coord.y][coord.x]
    this.coord = coord;
  }

  rotate(){
    this.dir = (this.dir + 1 + 4) % 4;
  }

  monitor(){
    const 탐색범위 = 탐색범위맵[this.id];

    탐색범위.forEach(v=> this.change((v + this.dir + 4) % 4))
  }

  unmonitor(){
    this.monitored.forEach(([y,x])=> map[y][x] = 0);
    this.monitored = []
  }

  change(v){
    switch(v){
      case 0: 
        for(let i=this.coord.x+1; i<map[0].length; i++) {
          if(map[this.coord.y][i] === 6) break;
          if(map[this.coord.y][i] === 0) {
            map[this.coord.y][i] = '#';
            this.monitored.push([this.coord.y,i])
          }
        }
        break;
      case 1:
        for(let i=this.coord.y+1; i<map.length; i++) {
          if(map[i][this.coord.x] === 6) break;
          if(map[i][this.coord.x] === 0) {
            map[i][this.coord.x] = '#';
            this.monitored.push([i,this.coord.x])
          }
        }
        break;
        case 2: 
          for(let i=this.coord.x-1; i>= 0; i--) {
            if(map[this.coord.y][i] === 6) break;
            if(map[this.coord.y][i] === 0) {
              map[this.coord.y][i] = '#';
              this.monitored.push([this.coord.y,i])
            }
          }
          break;
        case 3:
          for(let i=this.coord.y-1; i>=0; i--) {
            if(map[i][this.coord.x] === 6) break;
            if(map[i][this.coord.x] === 0) {
              map[i][this.coord.x] = '#';
              this.monitored.push([i,this.coord.x])
            }
          }
        break;
    }
  }
}

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const map = input.slice(1).map(v=>v.split(' ').map(Number));

let cameras = []
for(let i = 0; i<n; i++){
  for(let j = 0; j<m;j++){
    if(map[i][j] !==0 && map[i][j] !== 6) cameras.push({y:i,x:j})
  }  
}

const find사각지대 = (map) => {
  return map.flat().filter(v=> v===0).length
}

let min = 9999999

function dfs(L){
  if(L===cameras.length){
    // console.log(map.map(v=>v.join('')).join('\n') + '\n') 
    min = Math.min(min, find사각지대(map))
    return;
  }
  const cctv = new CCTV(cameras[L]);
  for(let i = 0;i<탐색방향맵[cctv.id];i++){
     cctv.rotate();
     cctv.monitor();
     dfs(L+1);
     cctv.unmonitor()
  }
}

dfs(0)
console.log(min)
