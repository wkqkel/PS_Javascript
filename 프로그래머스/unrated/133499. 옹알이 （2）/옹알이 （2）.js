function solution(babbling) {
    const canArr = ["aya", "ye", "woo", "ma"];
    const cantArr = ["ayaaya", "yeye", "woowoo", "mama"];
    let cnt = 0;
    for(const x of babbling) {
       let copy = x;
       while(canArr.some(v=> copy.startsWith(v))){
        if(cantArr.some(v=> copy.startsWith(v))) break;
        copy = copy.replace(canArr.find(v=> copy.startsWith(v)),'')
       }
       if(!copy) cnt++
    }
    return cnt;
}