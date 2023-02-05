function solution(s) {
    // v[0].toUpperCase() 하면 시간초과 , v.charAt(0)으로 하면 됨.
    return s.toLowerCase().split(' ').map(v => v.charAt(0).toUpperCase() + v.substring(1)).join(' ');
    // return s.toLowerCase().replace(/(^| )\w/g, (v)=> v.toUpperCase());
}