function solution(n, t) {
   // return n * (2 ** t)
   // 지정한 수만큼 비트 전체를 왼쪽으로 이동한다.
   // 몇 칸 이동했는지에 따라 2의 제곱만큼 수가 곱해진다.
    return n << t
}