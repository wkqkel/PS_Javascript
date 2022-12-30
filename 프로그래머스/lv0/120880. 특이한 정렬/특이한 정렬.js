function solution(numlist, n) {
  // return numlist.sort((a,b)=>b-a).sort((a,b)=> Math.abs(n-a)-Math.abs(n-b))
    return numlist.sort((a,b)=> Math.abs(n-a)-Math.abs(n-b) || b - a)
}