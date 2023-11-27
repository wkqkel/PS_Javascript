/** 
1. 아이디어
- 스티커를 포문돌린다
- 스티커 회전을 포문돌린다
- 맵을 이중포문 돌린다
- 스티커를 맵에 맞출수있는지 확인하고,
- 맞출수있으면 끼운다.
- for문 다돌아도 없으면 버린다.
- 몇칸이 채워졌는지 센다.

2. 시간복잡도



3. 자료구조
- board: 노트북의 칸
- stickers: 스티커의 모눈종이 모음

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m,k] = input[0].split(' ').map(Number);
let stickers = [];
let nextStickerLine = 1;
let curLine = 1;
while(true){
  if(curLine >= input.length) break;
  if(nextStickerLine === curLine){
    const [n,m] = input[curLine].split(' ').map(Number);
    nextStickerLine += n + 1
    stickers.push([])
  } else {
    const sticker = input[curLine].split(' ').map(Number);
    stickers[stickers.length-1].push(sticker);
  }
  curLine++
}

let map = Array.from({length:n},()=>Array.from({length:m},()=> 0));

for(let s = 0; s < stickers.length; s++){
  let sticker = stickers[s]
  for(let r = 0; r < 4; r++){
    // console.log('before',{sticker,map,r,s},stickers)
    const res = attach(map, sticker);
    if(res.attached) {
      map = res.v;
      // console.log('after',{sticker,map,r})
      break;
    }
    sticker = rotate(sticker);
  }
}

let res = 0;
for(let i = 0; i< n;i++){
  for(let j = 0; j<m;j++){
   if(map[i][j]===1) res++
  }
}

console.log(res)

function attach(map, sticker){
  let canAttach = false;
  // console.log(map,sticker)
  let [sn,sm] = [sticker.length, sticker[0].length]
  let [n,m] = [map.length, map[0].length];
  const copy = JSON.parse(JSON.stringify(map))
  let changed = []
  const sb = sticker.flat().filter(Boolean);

  for(let i = 0; i<n;i++){
    for(let j = 0; j<m;j++){
      changed = []
      for(let si =0; si<sn; si++) {
        for(let sj = 0; sj<sm;sj++){
          if(i+si<0 || i+si>=n || j+sj<0 || j+sj>=m) break;
          if(sticker[si][sj] === 1 && map[i+si][j+sj] === 0){
            changed.push({y:i+si,x:j+sj})
          }
        }
      }

      if (sb.length === changed.length) {
        changed.forEach((v)=>copy[v.y][v.x] = 1)
        return {attached:true,v:copy}
      }
    }
  }
  return {attached:false,v:map}
}


function rotate(map){
  const [n,m] = [map.length, map[0].length]
  const copy = Array.from({length:m},()=>Array.from({length:n},()=>0));

  for(let y=0;y<n;y++){
    for(let x=0;x<m; x++){
      copy[x][n-y-1] = map[y][x]
    }
  }

  return copy
}

function rotateTest(){
  const map = [[1,2,3,4],// (0,0) -> (0, 2);
   [5,6,7,8],//  (0,1) -> (1,2)
   [9,10,11,12]];  //(2,0) -> (0, 0); (y: x,x:n-y-1)

  [[9,5,1],
   [10,6,2],
   [11,7,3],
   [12,8,4]]
  
  console.log(String(rotate(map)) === String([[9,5,1],[10,6,2],[11,7,3],[12,8,4]]))
  console.log(String(rotate(rotate(map))) === String([[12,11,10,9],[8,7,6,5],[4,3,2,1]]))
}

// rotateTest()


