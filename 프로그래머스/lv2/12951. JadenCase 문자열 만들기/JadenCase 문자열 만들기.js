function solution(s) {
    return s.split(' ').map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ');
    return s.toLowerCase().replace(/(^| )\w/g, (v)=> v.toUpperCase());
}