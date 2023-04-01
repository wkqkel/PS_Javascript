function solution(s) {
    const arr = ['']
    for(let x of s){
        if(!isNaN(+x)) {
          arr[arr.length - 1] += x
          continue;
        }
        if(x===','){
            arr[arr.length] = ''
        }
    }
  
    
    const map = new Map();
    arr.forEach((v)=> map.set(+v, (map.get(+v) | 0) + 1 ))
    return [...map].sort((a,b)=> b[1] - a[1]).map(v=>+v[0])
    // const map = arr.reduce((acc,cur)=> ({...acc, [cur]: (acc[cur]|0) + 1}) ,{})
    // const sortedMap = Object.entries(map).sort((a,b)=> b[1] - a[1])
    // return sortedMap.map(v=> +v[0])
}