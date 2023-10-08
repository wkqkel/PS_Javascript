import static java.lang.Math.pow;

class Solution {
    public int solution(int a, int b, int c) {
        int count = 1;
        int answer = 1;
        
        if(a==b && b==c) {
          count++;
        }
        if(a==b || b==c || a==c) {
          count++;
        }
        
        for(int i = 1; i <= count; i++){
          answer *= pow(a, i) + pow(b,i) + pow(c,i);
        }
        
        return answer;
    }
}