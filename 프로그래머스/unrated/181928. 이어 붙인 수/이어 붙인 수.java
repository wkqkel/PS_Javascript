class Solution {
    public int solution(int[] num_list) {
        String oddStr = "";
        String evenStr = "";
        
        for(int num : num_list) {
            if(num % 2==0) {
                oddStr += num;
                continue;
            } 
            evenStr += num;
        }
        
        return Integer.valueOf(oddStr) + Integer.valueOf(evenStr);
    }
}