function solution(citations) {
    const { length } = citations

    for(let i=length; i>0; i--){
   
      if(i <= citations.filter((v)=>v>=i).length) return i
    }
    return 0
}