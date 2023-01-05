function solution(t, p) {
    let cur = t.slice(0,p.length)
    let ans = 0;
    for(let i=p.length; i<=t.length; i++ ){
        if(+cur <= +p) ans++
        cur = cur.slice(1)+t[i]
    }
    return ans
}