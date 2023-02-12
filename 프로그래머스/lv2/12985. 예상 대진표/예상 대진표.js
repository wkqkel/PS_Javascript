function solution(n,a,b, count = 1) {
   [a, b] = [a,b].sort((a,b)=> a-b)
   if(b - a === 1 && b % 2 === 0) return count;
   return solution(n/2, Math.ceil(a / 2), Math.ceil(b / 2), count +1);
}

// 반례) 4랑 5는 차이가 1이지만 3번 경기해야함.
