function solution(s) {
    return [...s].map((v,i,l)=>l.indexOf(v)===i? -1 : i-l.lastIndexOf(v,i-1))
}