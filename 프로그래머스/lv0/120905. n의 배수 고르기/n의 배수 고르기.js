function solution(n, numlist) {
   return numlist.filter(e => e % n === 0)
   return numlist.filter(e => !(e % n))
}