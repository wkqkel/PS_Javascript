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
          answer *= Math.pow(a, i) + Math.pow(b,i) + Math.pow(c,i);
        }
        
        return answer;
    }
}