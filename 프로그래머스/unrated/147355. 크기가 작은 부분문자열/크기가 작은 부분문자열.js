function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length;i++){
        if(t.slice(i, p.length + i) <= +p) count++
    }
    return count
    // let cur = t.slice(0,p.length)
    // let ans = 0;
    // for(let i=p.length; i<=t.length; i++ ){
    //     if(+cur <= +p) ans++
    //     cur = cur.slice(1)+t[i]
    // }
    // return ans
}