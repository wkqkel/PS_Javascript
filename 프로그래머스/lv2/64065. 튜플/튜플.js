function solution(s) {
    const arr = [...s].reduce((acc,cur)=> {
        if(!isNaN(+cur)) {
          acc[acc.length - 1] += cur
        }
         if(cur===','){
            acc[acc.length] = ''
        }
        return acc
    },[''])
    
    const map = arr.reduce((acc, v) => {
      acc.set(v, (acc.get(v) || 0) + 1);
      return acc;
    }, new Map());
    
    return [...map].sort((a,b)=> b[1] - a[1]).map(v=> +v[0]);
    
    // const map = arr.reduce((acc,cur)=> ({...acc, [cur]: (acc[cur]|0) + 1}) ,{})
    // const sortedMap = Object.entries(map).sort((a,b)=> b[1] - a[1])
    // return sortedMap.map(v=> +v[0])
    
    // const map = new Map();
    // arr.forEach((v)=> map.set(v, (map.get(v) | 0) + 1 ))
}