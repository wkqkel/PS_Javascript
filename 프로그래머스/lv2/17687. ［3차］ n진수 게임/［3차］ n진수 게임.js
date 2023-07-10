function solution(n, t, m, p) {
    const arr = [];
    while(arr.join('').length < t * m) {
        arr.push((arr.length).toString(n).toUpperCase());
    }
    return arr.join('').split('').filter((v,i)=> (i%m)===p-1).splice(0, t).join('');
}


    
