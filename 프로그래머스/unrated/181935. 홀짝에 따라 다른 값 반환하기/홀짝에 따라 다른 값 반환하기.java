class Solution {
    public int solution(int n) {
        int answer = 0;
        answer = getValue(n);
        return answer;
    }
    
    int getValue(int n) {
        if(n < 1){
            return 0;
        }else{
            int newValue = n % 2== 0 ? n * n : n;
            return newValue + getValue(n-2);
        }
    }
}