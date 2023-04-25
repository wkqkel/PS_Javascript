function solution(elements) {
    const arr = elements
    const n = elements.length
    const set = new Set()
    for(let width=1; width<=n; width++){ 
      for(let i=0; i<n; i++){
        set.add(concat(arr, width-1).slice(i,width+i).reduce((a,b)=>a+b))
      }
    }
    return set.size
}

const concat = (arr, n) => arr.concat(arr.slice(0,n))
const sum = (arr) => arr.reduce((a,b)=>a+b,0);