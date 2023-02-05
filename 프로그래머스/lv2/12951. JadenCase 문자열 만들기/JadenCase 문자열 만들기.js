function solution(s) {
    return s.toLowerCase().replace(/(^| )\w/g, (v)=> v.toUpperCase())
   
}