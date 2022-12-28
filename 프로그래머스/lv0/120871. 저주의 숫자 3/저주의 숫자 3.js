function solution(n) {
    let num=1;
    for(let i = 1; i<=n; i++) {
        num = i
        if(num % 3 === 0 || (num + "").includes('3')) n++
    }
    return num
}