class Solution {
    String answer = "";
    
    public String solution(int[] numLog) {
        for(int i = 0; i < numLog.length -1; i++){
            int log = numLog[i+1] - numLog[i];
            calculate(log);
        }
        
        return answer;
    }
    
    private void calculate(int num) {
        switch(num){
            case 1:
                answer += "w";
                break;
            case -1:
                answer += "s";
                break;
            case 10: 
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;         
        }
    }
}