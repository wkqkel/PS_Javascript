function solution(n) {
    // let next = n + 1; 
    // const returnN1Binary = (n) => n.toString(2).replaceAll('0','').length
    // const nN1Ninary = returnN1Binary(n)
    // while(true) {
    //  if(nN1Ninary  === returnN1Binary(next)) return next;
    //  next++;
    // }
    
    const size = n.toString(2).match(/1/g).length;
    while(n++){
        if(size===n.toString(2).match(/1/g).length) return n
    }
}