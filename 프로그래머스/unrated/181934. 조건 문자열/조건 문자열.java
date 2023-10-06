class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        boolean answer = false;
        
        switch(ineq+eq) {
            case(">="):
                answer = n >= m;
                break;
            case("<="):
                answer = n <= m;
                break;
            case(">!"):
                answer = n > m;
                break;
            case("<!"):
                answer = n < m;
                break;
            default: 
                System.out.println("invalid value!!");
        }
        
        return answer ? 1 : 0;
    }
}