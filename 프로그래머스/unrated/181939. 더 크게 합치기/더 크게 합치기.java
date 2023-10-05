
class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int num1 = Integer.valueOf(a + "" + b);
        int num2 = Integer.valueOf(b + "" + a);
        answer = num1 > num2 ? num1 : num2;
        return answer;
    }
}