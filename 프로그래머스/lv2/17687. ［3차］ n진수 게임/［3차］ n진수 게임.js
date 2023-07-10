function solution(n, t, m, p) {
    let str = ''
    for(let i = 0; i <= t * m; i++){
        str += i.toString(n);
    }

    return [...str].filter((v,i)=> i % m === p-1).slice(0,t).join("").toUpperCase()
}
    