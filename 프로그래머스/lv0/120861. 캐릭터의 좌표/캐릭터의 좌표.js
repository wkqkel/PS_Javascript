const KEY_INPUT_MAP = {
    up: [0,1],
    down: [0, -1],
    left: [-1,0],
    right: [1,0]
}

function solution(keyinput, board) {
  const [maxX, maxY] = board.map((v)=> ~~(v/2))

  return keyinput
      .map((v)=>KEY_INPUT_MAP[v])
      .reduce((acc,cur)=> {
        const x = acc[0]+cur[0] > 0 
        ? Math.min(acc[0]+cur[0],maxX) : Math.max(acc[0]+cur[0], -maxX) 
        const y = acc[0]+cur[0] > 0 
        ? Math.min(acc[1]+cur[1],maxY) : Math.max(acc[1]+cur[1], -maxY) 
        return [x,y]}, [0,0])
}