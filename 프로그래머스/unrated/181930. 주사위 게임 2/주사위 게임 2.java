class Solution {
    public int solution(int a, int b, int c) {
        if(a==b && b== c) {
            int answer = 1;
            for(int i = 1; i <= 3; i++){
               answer *= Math.pow(a, i) + Math.pow(b,i) + Math.pow(c,i);
            }
            return answer;
        }
        
        if((a==b && b!=c) || (a==c && a!=b) || (b==c && a!=b)) {
            int answer = 1;
            for(int i = 1; i <= 2; i++){
               answer *= Math.pow(a, i) + Math.pow(b,i) + Math.pow(c,i);
            }
            return answer;
        }
        
        return a+b+c;
    }
}