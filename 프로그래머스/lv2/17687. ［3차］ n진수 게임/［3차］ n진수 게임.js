function solution(n, t, m, p) {
    let str = ''
    for(let i = 0; i <= 30000; i++){
        str += i.toString(n).toUpperCase();
    }

    return str.split("").filter((v,i)=> {
        return i % m === p-1? str[i%m]:"" 
    }).join("").slice(0,t)
}
    
