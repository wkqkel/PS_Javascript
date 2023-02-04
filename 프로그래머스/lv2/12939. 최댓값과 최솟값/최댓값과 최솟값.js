function solution(s) {
    // const arr = s.split(' ').sort((a,b)=> +a - +b);
    // return `${arr[0]} ${arr[arr.length - 1]}`
    
    // 아래가 시간 더 적게 걸림
    const arr = s.split(' ');
    return `${Math.min(...arr)} ${Math.max(...arr)}`
}