const solution =(elements)=>{
  const set = new Set()
  const arr =elements.concat(elements)
  
  for(i=0;i<elements.length;i++){
    for(j=0;j<arr.length;j++){
      set.add(arr.slice(j,j+i+1).reduce((a,b)=>a+b))
    }
  }

  return set.size
}