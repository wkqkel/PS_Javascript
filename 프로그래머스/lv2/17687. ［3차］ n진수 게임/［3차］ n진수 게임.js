function solution(n, t, m, p) {
    let cnt = 0;
    let str = '';
    let res = '';
    while(cnt <= t * m){
        str += cnt.toString(n);
        res += cnt % m === p-1 ? str[cnt] : ''
        cnt++
    }

    return res.slice(0,t).toUpperCase();
}
    
