const MOVE_MAP = {
         U: [0,1],
         D: [0,-1],
         R: [1,0],
         L: [-1,0],
        }
class Character {
    position = [0,0]
    history = new Set()
    move(direction) {
        const add = MOVE_MAP[direction]
        if(this.checkOverPlane(this.position, add)) {
            return
        }
        const prev = [...this.position]
        this.position = [this.position[0] + add[0], 
                         this.position[1] + add[1]] 
        // x:0,-1 y:0,0 ===  x:-1,0 y:0,0 => sorted
        const newHistory = JSON.stringify({
                             x:[prev[0],this.position[0]].sort(),
                             y:[prev[1],this.position[1]].sort()
                           })
        this.history = this.history.add(newHistory)        
    }
   
    checkOverPlane(origin, add){
      const isOver = (a,b) => a+b > 5 || a+b < -5
      return isOver(origin[0],add[0]) || isOver(origin[1],add[1]);
    }
}
function solution(dirs) {
  const character = new Character()
  for (let x of dirs){
      character.move(x)
  }
  return character.history.size
}