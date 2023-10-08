class Solution {
    int answer;
    public int solution(int n, String controls) {
        answer = n;
        for(char control: controls.toCharArray()) {
          calculate(control);
        }
        return answer;
    }
    
    private void calculate(char control) {
        switch(control){
            case 'w':
                answer += 1;
                break;
            case 's':
                answer -= 1;
                break;
            case 'd': 
                answer += 10;
                break;
            case 'a':
                answer -= 10;
                break;         
        }
    }
    
}